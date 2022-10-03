import "../styles/globals.css";
import NavBar from "../Components/Shared/NavBar";
import Register from "../Components/Shared/Register";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import useAthentication from "../Authentication/useAuthentication";
import axios from "axios";
import "animate.css";

export const ProductsContext = createContext();
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
function MyApp({ Component, pageProps }) {
  // all products
  const [products, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isShowAuthModal, setIsShowAuthModal] = useState(false);

  // fixing route change reload state
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart?.length) {
      setCart(cart);
    }
  }, []);

  const { userLoad } = useAthentication();
  // payment checkout session function
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post(
      "http://localhost:3000/api/checkoutsession",
      { cart,  email: userLoad?.email }
    );

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
  };

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <ProductsContext.Provider
          value={{
            products,
            setAllProducts,
            cart,
            setCart,
            isVisible,
            setIsVisible,
            setIsShowAuthModal,
            createCheckoutSession,
          }}
        >
          <NavBar />
          <Component {...pageProps} />

          {isShowAuthModal && <Register />}
        </ProductsContext.Provider>
        <div>
          <Toaster />
        </div>
      </>
    );
  }
}

export default MyApp;
