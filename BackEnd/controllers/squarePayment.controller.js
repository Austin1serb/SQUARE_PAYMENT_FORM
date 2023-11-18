const { v4: uuidv4 } = require('uuid');

const { Client, Environment, ApiError } = require("square");

const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Sandbox, //CHANGE TO PRODUCTION WHEN READY

});
const paymentsApi = client.paymentsApi;

function convertBigIntToString(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'bigint') {
            obj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            convertBigIntToString(obj[key]);
        }
    }
}

const processPayment = async (req, res) => {

    const { sourceId, amount } = req.body; // sourceId is the payment source, e.g., card nonce

    try {
        const response = await paymentsApi.createPayment({
            sourceId: sourceId,
            idempotencyKey: uuidv4(),
            amountMoney: {
                amount: amount, // amount in cents
                currency: 'USD'
            }
        });
        convertBigIntToString(response); // Convert BigInt values to strings

        let responseBody;
        if (typeof response.body === 'string') {
            responseBody = JSON.parse(response.body);
        } else {
            responseBody = response.body;
        }

        if (response && responseBody.payment.status === 'COMPLETED') {

            res.json({
                success: true,
                message: 'Payment processed successfully',
                paymentId: response.id,
                receiptUrl: response.receiptUrl,
                response: response
            });
        } else {

            // Payment failed
            res.status(400).json({ message: 'Payment failed' });
        }
    } catch (error) {
        if (error instanceof ApiError) {
            // Handle Square-specific API errors
            console.error('Square API Error occurred:', error);
            // You can access detailed information about the error
            // For example: error.statusCode, error.headers, error.body
        } else {
            // Handle other types of errors
            console.error('Error occurred:', error);
        }
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    processPayment
};







