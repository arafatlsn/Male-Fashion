import "../styles/globals.css";
import NavBar from "../Components/Shared/NavBar";
import Register from "../Components/Shared/Register";
import LoaderComp from "../Components/Shared/LoaderComp";
import Footer from "../Components/Shared/Footer";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import useAthentication from "../Authentication/useAuthentication";
import axios from "axios";
import "animate.css";

export const ProductsContext = createContext();
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
function MyApp({ Component, pageProps }) {
  // all products states
  const [products, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isShowAuthModal, setIsShowAuthModal] = useState(false);

  // loading state
  const [isLoading, setIsLoading] = useState(false);

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

    if (!userLoad?.email) {
      toast.error("Please Login");
      return;
    }

    const checkoutSession = await axios.post(
      "http://localhost:3000/api/checkoutsession",
      { cart, email: userLoad?.email }
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
            setIsLoading,
          }}
        >
          <NavBar />
          <Component {...pageProps} />

          {isShowAuthModal && <Register />}
          {isLoading && <LoaderComp />}
        </ProductsContext.Provider>
        {/* footer  */}
        <footer>
          <Footer />
        </footer>
        <Toaster />
      </>
    );
  }
}

export default MyApp;
