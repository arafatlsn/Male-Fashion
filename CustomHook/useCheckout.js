import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

// payment checkout session function
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
const createCheckoutSession = async (
  cart,
  user,
  setShowAuthModal,
  setShowLoader
) => {
  const stripe = await stripePromise;

  if (!user?.email) {
    setShowAuthModal(true);
    toast.error("Signin Required!", {
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

  try {
    setShowLoader(true);
    const checkoutSession = await axios.post(
      "https://male-fashion-tau.vercel.app/api/checkoutsession",
      { cart, email: user?.email }
    );

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    setShowLoader(false);
  } catch (err) {
    setShowLoader(false);
    toast.error(`${err?.message}. Please try again later!`, {
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
  }
};

export default createCheckoutSession;
