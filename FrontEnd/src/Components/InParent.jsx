import React, { useEffect, useState } from 'react';
import SquarePaymentForm from './SquarePaymentForm.jsx';


const InParent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSquareSdkLoaded, setIsSquareSdkLoaded] = useState(false);




    const loadSquareSdk = () => {
        const script = document.createElement('script');
        script.src = "https://js.squareupsandbox.com";
        script.type = "text/javascript";
        script.async = false;
        script.onload = () => setIsSquareSdkLoaded(true);
        document.body.appendChild(script);
    };

    useEffect(() => {

        loadSquareSdk();
    }, []);


    const onPaymentProcess = (paymentToken) => {
        console.log("Payment paymentToken received:", paymentToken);
        finalizeOrderAndProcessPayment(paymentToken)
    };

    const finalizeOrderAndProcessPayment = async (paymentToken) => {
        setIsLoading(true);
        try {

            //SET PAYMENT AMOUNT
            // Convert amount to cents 
            const paymentAmount = Math.round(100.50 * 100);


            // First, process the payment with Square
            if (paymentToken) {

                const paymentResponse = await fetch('http://localhost:8000/api/payment/process-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        //TESTING
                        sourceId: 'cnon:card-nonce-ok', // or sourceId: paymentToken.token,
                        amount: paymentAmount,

                    }),
                });

                const paymentResult = await paymentResponse.json();
                console.log(paymentResult);

                // Check if payment was successful
                if (paymentResponse.ok && paymentResult.success === true) {

                    //OR WHAT YOU WANT IT TO DO ON SUCCESS
                    //window.location.href = '/success';

                } else {
                    // Handle payment processing failure
                    console.error('Payment processing failed:', paymentResult);
                }
            } else {
                console.error('Missing payment token');
            }
        } catch (error) {
            console.error('Error during finalizing order and payment:', error);
        } finally {
            setIsLoading(false); // Stop loading state after all processes are complete or an error occurs
        }
    };


    return (
        <div>
            {isSquareSdkLoaded &&
                <SquarePaymentForm onPaymentProcess={onPaymentProcess} paymentForm={window.SqPaymentForm} />
            }
        </div>
    )
}

export default InParent