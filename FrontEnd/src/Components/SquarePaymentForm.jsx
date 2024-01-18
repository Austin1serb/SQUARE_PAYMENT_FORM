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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
}
    return (
        <div style={cardStyles}>
            <img src="https://images.ctfassets.net/2d5q1td6cyxq/58rgox9CjnDZYQSxSwikxb/d9cae0bf4d3f53900820eac00b049528/PD04488_-_black_logo_on_white.png?w=1502&h=768&fm=avif&q=85&fit=scale" alt="square-logo" className='checkout-paymentForm-logo' height={200} width={391} style={{marginBottom:'-80px'}} />
            <h1 > Payment Form</h1>
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
