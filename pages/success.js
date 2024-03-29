import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuthentication from "../Authentication/useAuthentication";
import Link from "next/link";
import successgif from "../Assets/Icon/success.gif";
import Image from "next/image";
import { BiHome } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { cartState } from "../AtomStates/ProductStates";
import Head from "next/head";

const Handler = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const route = useRouter();
  const {
    query: { sessionId },
  } = route;

  const { userLoad } = useAuthentication();

  useEffect(() => {
    const func = async () => {
      let newArray = [];
      let obj = {};
      const {
        data: { status, result },
      } = await axios.get(
        `https://male-fashion1.netlify.app/api/session/${sessionId}`
      );
      if (status === "paid" && userLoad?.email) {
        for (let i = 0; i < JSON.parse(result?.titles).length; i++) {
          obj.title = JSON.parse(result?.titles)[i];
          obj.description = JSON.parse(result?.descriptions)[i];
          obj.img = JSON.parse(result?.images)[i];
          obj.price = JSON.parse(result?.prices)[i];
          obj.cartQuantity = JSON.parse(result?.quantities)[i];
          newArray = [...newArray, obj];
          obj = {};
        }
        const res = await axios.post(
          `https://male-fashion1.netlify.app/api/postOrder`,
          {
            email: userLoad?.email,
            sessionId,
            order: newArray,
          }
        );
        setCart([]);
        localStorage.removeItem("cart");
      }
    };
    if (sessionId) {
      func();
    }
  }, [sessionId, userLoad]);

  return (
    <>
      {/* head  */}
      <Head>
        <title>Male Fashion - Ordered Success</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[80vh] w-[100%] flex flex-col items-center justify-center">
        <div className="w-[200px] h-[200px] relative">
          <Image
            priority
            className="object-contain"
            src={successgif}
            layout="fill"
            alt="success-gif"
          />
        </div>
        <p className="mt-[1.5rem] text-green-600 text-[1.3rem] font-semibold text-center font-mono">
          SUCCESSFULLY! You Placed an Order
        </p>
        <Link href={"/"}>
          <button className="text-gray-600 font-bold tracking-wider flex items-center gap-[.5rem] mt-[1rem]">
            <BiHome className="text-[1.2rem] translate-y-[-.1rem]" /> Go To
            HomePage
          </button>
        </Link>
      </div>
    </>
  );
};

export default Handler;
