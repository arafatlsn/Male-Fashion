import "../styles/globals.css";
import NavBar from "../Components/Shared/NavBar";
import { createContext, useEffect, useState } from "react";
import "animate.css";

export const ProductsContext = createContext();
function MyApp({ Component, pageProps }) {
  // all products
  const [products, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart?.length) {
      setCart(cart);
    }
  }, []);
  return (
    <>
      <ProductsContext.Provider
        value={{ products, setAllProducts, cart, setCart }}
      >
        <NavBar />
        <Component {...pageProps} />
      </ProductsContext.Provider>
    </>
  );
}

export default MyApp;
