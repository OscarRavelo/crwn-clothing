import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hb0ilGRa1MfXMaen78isvfiIdIThRwYXHlcV1QZywN7cB118TuJGfa2zp7CpJUJUIhIL8fNrWiBpztGlCzrPEQS00uGlPrldz";
  const onToken = (token) => {
    console.log(token);
    alert("payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name=" CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
