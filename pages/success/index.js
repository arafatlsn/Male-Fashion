import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsBoxArrowInRight } from "react-icons/bs";
import { ProductsContext } from "../_app";
import useAuthentication from "../../Authentication/useAuthentication";
import Link from "next/link";

const Handler = () => {
  const { setCart } = useContext(ProductsContext);
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
        `https://male-fashion-tau.vercel.app/api/session/${sessionId}`
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
          "https://male-fashion-tau.vercel.app/api/postOrder",
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
    <div className="w-[95vw] lg:w-[1170px] h-[100vh] mx-auto flex flex-col  justify-center items-center overflow-hidden">
      <div className="bg-[whitesmoke] px-[.5rem] lg:px-[5rem] py-[4rem] rounded-[1.1rem] flex flex-col justify-center items-center overflow-hidden">
        <h1 className="text-[1rem] lg:text-[2rem] tracking-wide text-green-400 font-bold whitespace-nowrap">
          Your order has been received.
        </h1>
        <span className="text-[5rem] text-green-400 mt-[3rem] mb-[1rem]">
          <IoMdCheckmarkCircleOutline />
        </span>
        <h1 className="text-[dimgray] text-[1.2rem]">
          Thank you for your purchase!
        </h1>
        <div className="mt-[1.5rem] cursor-pointer">
          <Link href="/">
            <p className="text-[dimgray] cursor-pointer hover:underline transition-all flex items-center gap-[.5rem]">
              <BsBoxArrowInRight className="text-[1.3rem]" />
              Go to Homepage.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Handler;
