import "../styles/globals.css";
import NavBar from "../Components/Shared/NavBar";
import Register from '../Components/Shared/Register'
import { createContext, useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import "animate.css";

export const ProductsContext = createContext();
function MyApp({ Component, pageProps }) {
  // all products
  const [products, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart?.length) {
      setCart(cart);
    }
  }, []);
  return (
    <>
      <ProductsContext.Provider
        value={{ products, setAllProducts, cart, setCart, isVisible, setIsVisible }}
      >
        <NavBar />
        <Component {...pageProps} />
        <Register/>
      </ProductsContext.Provider>
      <div><Toaster/></div>
    </>
  );
}

export default MyApp;
