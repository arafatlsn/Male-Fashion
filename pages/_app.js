import "../styles/globals.css";
import NavBar from "../Components/Shared/NavBar";
import { createContext, useState } from "react";

export const ProductsContext = createContext();
function MyApp({ Component, pageProps }) {
  // all products
  const [products, setAllProducts] = useState([]);

  return (
    <>
      <ProductsContext.Provider value={{ products, setAllProducts }}>
        <NavBar />
        <Component {...pageProps} />
      </ProductsContext.Provider>
    </>
  );
}

export default MyApp;
