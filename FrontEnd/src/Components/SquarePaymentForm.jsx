import React from 'react';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';

const SquarePaymentForm = ({ onPaymentProcess }) => {


    const applicationId = process.env.REACT_APP_SQUARE_APPLICATION_ID_SANDBOX;
    const locationId = process.env.REACT_APP_SQUARE_LOCATION_ID_SANDBOX;
    const handleTokenRecieved = (paymentToken) => {
        // Call your onPaymentProcess function with the paymentToken
        onPaymentProcess(paymentToken);
    };



    const cardStyles = {
        //more styles here
        width: '50%',

    }
    return (
        <div style={cardStyles}>
            <PaymentForm
                applicationId={applicationId}
                locationId={locationId}
                cardTokenizeResponseReceived={handleTokenRecieved}

            >
                <div>
                    <CreditCard />
                </div>
            </PaymentForm>
        </div>
    );
};

export default SquarePaymentForm;
