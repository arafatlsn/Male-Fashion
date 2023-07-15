import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

// payment checkout session function
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
const createCheckoutSession = async (cart, user) => {
  const stripe = await stripePromise;

  if (!user?.email) {
    toast.error("Please Login!", {
      style: {
        border: "1px solid red",
        padding: "16px",
        color: "red",
        background: "whitesmoke",
      },
      iconTheme: {
        primary: "red",
        secondary: "#FFFAEE",
      },
    });
    return;
  }

  const checkoutSession = await axios.post(
    "https://male-fashion-tau.vercel.app/api/checkoutsession",
    { cart, email: user?.email }
  );

  const result = await stripe.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  });
};

export default createCheckoutSession;
