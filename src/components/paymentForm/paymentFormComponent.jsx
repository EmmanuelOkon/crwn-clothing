import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

import { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";

import {
  PaymentFormContainer,
  FormContainer,
  FormTitle,
  PaymentButon,
} from "./paymentFormStyles.jsx";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayement, setIsProcessingPayement] = useState(false);

  const paymentHandler = async (e) => {
    const position = "top-right";
    const duration = 3000;
    const others = {
      closeButton: false,
    };
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayement(true);

    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayement(false);

    if (paymentResult.error) {
      toast.error("Payment failed", {
        position,
        autoClose: duration,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        transition: Slide,
        ...others,
      });
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment successful", {
          position,
          autoClose: duration,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "light",
          transition: Slide,
          ...others,
        });
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <FormTitle>Credit Card Payment: </FormTitle>
        <CardElement />
        <PaymentButon
          isLoading={isProcessingPayement}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButon>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
