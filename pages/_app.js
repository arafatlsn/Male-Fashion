import "../styles/globals.css";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import "animate.css";
import { RecoilRoot, useRecoilState } from "recoil";
import Register from "../Components/Shared/Register";
import LoaderComp from "../Components/Shared/LoaderComp";
import SuccessSnackbar from "../Components/Shared/SuccessSnackbar";

export const ProductsContext = createContext();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <NavBar />
        <Component {...pageProps} />
        <footer>
          <Footer />
        </footer>
        <Toaster />
        <Register />
        <LoaderComp />
        <SuccessSnackbar />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
