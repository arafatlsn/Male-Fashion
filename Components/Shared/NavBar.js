import Image from "next/image";
import logo from "../../Assets/Homepage/logo.png";
import { TbSearch } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { RiSecurePaymentFill } from "react-icons/ri";
import styles from "../../styles/NavBar.module.css";
import Cart from "../Homepage/Cart";
import { useContext, useState } from "react";
import { ProductsContext } from "../../pages/_app";
import { useRouter } from "next/router";
import Link from "next/link";

const Handler = () => {
  const { cart, isVisible, setIsShowAuthModal } = useContext(ProductsContext);
  const { visibleCart, setVisibleCart } = useState();
  const router = useRouter();

  let total = 0;
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      total = cart[i].price * cart[i].cartQuantity + total;
    }
  }
  return (
    <div className="sticky top-0 z-[500] bg-[white]">
      <div className="lg:w-[1170px] py-[30px] mx-auto flex justify-between items-center relative">
        <div>
          <Image src={logo} alt="h3llo world" />
        </div>
        <div>
          <ul className="flex gap-[45px] w-fit">
            <Link href={"/"}>
              <li
                className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}
              >
                Home <p className={styles.liBorder}></p>
              </li>
            </Link>
            <li
              className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}
            >
              Shop <p className={styles.liBorder}></p>
            </li>
            <li
              className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}
            >
              History <p className={styles.liBorder}></p>
            </li>
            <li
              onClick={() => setIsShowAuthModal(true)}
              className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}
            >
              Login <p className={styles.liBorder}></p>
            </li>
            <li
              className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}
            >
              Contact <p className={styles.liBorder}></p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[25px] w-fit">
            <li className="text-lightBlack text-[1.5rem]">
              <TbSearch />
            </li>
            <li className="text-lightBlack text-[1.5rem]">
              <FiHeart />
            </li>
            <li
              className={`text-lightBlack text-[1.5rem] flex items-center gap-[.3rem] relative ${styles.cartIcon}`}
            >
              <MdOutlineShoppingCart />{" "}
              <span className="text-[15px] font-semibold flex items-center gap-[.2rem] absolute left-[2rem]">
                <TbCurrencyTaka className="text-[1.4rem] mr-[-.3rem]" />
                {total}
              </span>
              {/* cart ui  */}
              <div className="flex justify-end">
                <div
                  className={`w-[350px] bg-[#F0EFF5] absolute mt-[2.7rem] top-0 right-[-3.75rem] z-[100] ${
                    isVisible ? "visible opacity-100" : "invisible opacity-0"
                  } ${styles.cartUi} ${cart.length ? "h-[400]" : " h-[150px]"}`}
                >
                  <div className="absolute right-[17.5%] w-[30px] h-[30px] bg-[#F0EFF5] rotate-45 mt-[-.6rem]"></div>
                  {cart.length ? (
                    <div className="h-[400px]">
                      <div className="h-[70%] overflow-y-scroll">
                        {cart?.map((product) => (
                          <Cart key={product?._id} product={product} />
                        ))}
                      </div>
                      <hr />
                      <div>
                        <p className="text-[18px] font-semibold text-center flex justify-center items-center">
                          SubTotal:{" "}
                          <span className="text-[24px] font-semibold flex items-center gap-[.1rem]">
                            <TbCurrencyTaka className="text-[26px] mr-[-.3rem]" />
                            {total}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-center mt-[1rem]">
                        <div className="flex gap-[.7rem]">
                          <button
                            onClick={() => router.push("/cartpage")}
                            className="text-[14px] px-[2rem] py-[.3rem] border bg-green-400 hover:bg-green-300 text-green-900 rounded-[4px] tracking-wider flex items-center gap-[.3rem] transition-all"
                          >
                            <MdOutlineShoppingCart className="text-[1.2rem]" />{" "}
                            View Cart
                          </button>
                          <button className="text-[14px] px-[2rem] py-[.3rem] border bg-red-400 hover:bg-red-300 text-red-900 rounded-[4px] tracking-wider  flex items-center gap-[.3rem] transition-all">
                            <RiSecurePaymentFill className="text-[1.2rem]" />{" "}
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[150px] flex flex-col justify-center items-center">
                      {" "}
                      <span>
                        <HiOutlineEmojiSad className="text-[2rem]" />
                      </span>{" "}
                      <p className="text-[15px] text-lightBlack">
                        Your Cart is Empty.
                      </p>{" "}
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Handler;
