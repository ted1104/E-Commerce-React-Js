import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButtom = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51ITqBKHqZ4n6Z87NxpquS29fbijnNaNLb3u0aPNR49qH31AFyNjzuOBr4Wmy1hZ5Jl8W9lUNkvMvjrvhkWe8TaUg00x44MQzvu";
  const onToken = (token) => {
    console.log(token);
    alert("Payement Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRW Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButtom;
