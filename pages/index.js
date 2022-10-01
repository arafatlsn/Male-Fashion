import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { ProductsContext } from "./_app";
import Banner from "../Components/Homepage/Banner";
import Cards from "../Components/Homepage/Cards";
import DiscountOffer from "../Components/Homepage/DiscountOffer";
import LatestNews from "../Components/Homepage/LatestNews";
import Carousel from "../Components/Homepage/Carousel";
import Footer from "../Components/Shared/Footer";

export default function Home({ data }) {
  const { products, setAllProducts } = useContext(ProductsContext);
  useEffect(() => {
    setAllProducts(data);
  });
  return (
    <div>
      {/* head  */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main  */}
      <main>
        <Carousel />
        <Banner />
        <Cards products={products} />
        <DiscountOffer />
        <LatestNews />
      </main>
      {/* footer  */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://male-fashion-arafatlsn.vercel.app/api/loadproducts"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
