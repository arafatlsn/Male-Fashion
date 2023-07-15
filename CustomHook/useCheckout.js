import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

// payment checkout session function
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
const createCheckoutSession = async (cart, user) => {
  const stripe = await stripePromise;
  console.log(user);

  if (!user?.email) {
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
