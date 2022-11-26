import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CheekOutFrom = ({ productData }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const { buyerName, resalePrice, buyeremail, _id } = productData;

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify({ price: resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resalePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log(error);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyeremail,
          },
        },
      });
    if (confirmError) {
      return setCardError(confirmError.message);
    }
    // console.log(paymentMethod);
    if (paymentIntent?.status === "succeeded") {
      toast.success("Payment succesfully");

      const payment = {
        price: resalePrice,
        name: buyerName,
        transactionId: paymentIntent.id,
        email: buyeremail,
        buyingId: _id,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("user-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement className=" border bg-white h-12 pt-4 text-center" />
        <button
          type="submit"
          className="btn btn-sm btn-primary mt-4"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay Now
        </button>
      </form>
      <p className="text-red-600">{cardError}</p>

      {success && (
        <div>
          <p className="text-gray-800">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
          <Link to={"/dashboard/myOrders"}>
            {" "}
            <button className="btn btn-sm btn-primary mt-3">
              Go your Orders
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CheekOutFrom;
