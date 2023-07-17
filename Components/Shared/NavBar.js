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
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../pages/_app";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import useAthentication from "../../Authentication/useAuthentication";
import Profile from "../Shared/Profile";
import toast from "react-hot-toast";
import { Drawer } from "@mui/material";
import ProfileModal from "../Shared/ProfileModal";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { BiHome, BiHistory, BiUser, BiLogIn, BiPhone } from "react-icons/bi";
import { useRecoilState, useRecoilValue } from "recoil";
import { ActiveNavState, profileModal } from "../../AtomStates/HomePageStates";
import {
  cartState,
  showAuthModalState,
  visibleCartUiState,
} from "../../AtomStates/ProductStates";
import useCheckout from "../../CustomHook/useCheckout";

const Handler = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [visibleCart, setVisibleCart] = useRecoilState(visibleCartUiState);
  const [showAuthModal, setShowAuthModal] = useRecoilState(showAuthModalState);

  const { userLoad } = useAthentication();

  const route = useRouter();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [pathName, setPathName] = useRecoilState(ActiveNavState);
  const [userModal, setUserModal] = useRecoilState(profileModal);
  const checkoutFunction = useCheckout;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollValue = window?.scrollY;

      setScrollYValue(scrollValue);
    });
  }, []);

  // getting user orders by transaction id
  const generateTrxId = async () => {
    const res = await axios.get(
      `https://male-fashion1.netlify.app/api/orderhistory`
    );
  };

  let total = 0;
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      total = cart[i].price * cart[i].cartQuantity + total;
    }
  }

  const navigateToHistory = () => {
    if (userLoad?.email) {
      generateTrxId();
      route.push(`/orderhistory?email=${userLoad?.email}`);
    } else {
      setShowAuthModal(true);
      toast.error("Signin Required!", {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
          background: "whitesmoke",
        },
        iconTheme: {
          primary: "red",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    /*

    Navbar for large device

    */
    <>
      <div className="sticky top-0 z-[500] bg-[white] hidden lg:block">
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
              <Link href={`/orderhistory?email=${userLoad?.email}`}>
                <li
                  onClick={navigateToHistory}
                  className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}
                >
                  History <p className={styles.liBorder}></p>
                </li>
              </Link>
              {!userLoad?.email ? (
                <li
                  onClick={() => setShowAuthModal(true)}
                  className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}
                >
                  Login <p className={styles.liBorder}></p>
                </li>
              ) : (
                <li
                  className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList} ${styles.profileText}`}
                >
                  Profile <p className={styles.liBorder}></p>
                  <div className={`relative ${styles.profileDiv}`}>
                    <div
                      className={`w-[40px] h-[40px] z-[-100] bg-[#F0EFF5] absolute rotate-45 mt-[.5rem] top-0`}
                    ></div>
                    <Profile />
                  </div>
                </li>
              )}
              <li
                onClick={() => route.push("contactme")}
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
                <span>
                  <MdOutlineShoppingCart />
                  <sup className="absolute top-[-48%] z-[-100] right-[-10%] text-[14px] bg-yellow-200 w-[1.1rem] h-[1.1rem] rounded-[50%] flex justify-center items-center font-[500]">
                    <span>{cart?.length}</span>
                  </sup>
                </span>
                <span className="text-[15px] font-semibold flex items-center gap-[.2rem] absolute left-[2rem]">
                  <TbCurrencyTaka className="text-[1.4rem] mr-[-.3rem]" />
                  {total}
                </span>
                {/* cart ui  */}
                <div className="flex justify-end">
                  <div
                    className={`w-[350px] bg-[#F0EFF5] absolute mt-[2.7rem] top-0 right-[-3.75rem] z-[100] ${
                      visibleCart
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    } ${styles.cartUi} ${
                      cart.length ? "h-[400]" : " h-[150px]"
                    }`}
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
                          <div className="text-[18px] font-semibold text-center flex justify-center items-center">
                            <span>SubTotal:</span>
                            <span className="text-[24px] font-semibold flex items-center gap-[.1rem]">
                              <TbCurrencyTaka className="text-[26px] mr-[-.3rem]" />
                              {total}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-center mt-[1rem]">
                          <div className="flex gap-[.7rem]">
                            <Link href={"/cartpage"}>
                              <button className="text-[14px] px-[2rem] py-[.3rem] border bg-green-200 hover:bg-green-300 text-green-800 rounded-[4px] tracking-wider flex items-center gap-[.3rem] transition-all">
                                <MdOutlineShoppingCart className="text-[1.2rem]" />{" "}
                                View Cart
                              </button>
                            </Link>

                            <button
                              onClick={() =>
                                checkoutFunction(
                                  cart,
                                  userLoad,
                                  setShowAuthModal
                                )
                              }
                              className="text-[14px] px-[2rem] py-[.3rem] border bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-[4px] tracking-wider  flex items-center gap-[.3rem] transition-all"
                            >
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

      {/* 
      navbar for small device
        */}
      <div className="w-[100vw] fixed top-0 z-[200] lg:hidden">
        {/* heading logo part  */}
        <div>
          <div
            className={`flex items-center justify-between py-[1rem] pl-[.3rem] pr-[.5rem] transition-all ${
              scrollYValue > 100 && "bg-lightRed"
            }`}
          >
            <div className="flex items-center gap-[10px] ">
              <RiMenuUnfoldLine
                onClick={() => setOpenDrawer(true)}
                className="text-[1.5rem] cursor-pointer"
              />
              <div className="w-[130px] h-[20px] relative">
                <Image layout="fill" src={logo} alt="h3llo world" />
              </div>
            </div>

            <div
              onClick={() => route.push("/cartpage")}
              className={`text-lightBlack text-[1.5rem] flex items-center gap-[.3rem] relative ${styles.cartIcon}`}
            >
              <span className="order-2">
                <MdOutlineShoppingCart />
                <sup className="absolute top-[-48%] z-0 right-[-9%] text-[14px] bg-yellow-200 w-[1.1rem] h-[1.1rem] rounded-[50%] flex justify-center items-center font-[500]">
                  <span>{cart?.length}</span>
                </sup>
              </span>
              <span className="text-[15px] font-semibold flex items-center gap-[.2rem] order-1">
                <TbCurrencyTaka className="text-[1.4rem] mr-[-.3rem]" />
                {total}
              </span>
            </div>
          </div>
        </div>

        {/* drawer section  */}
        <div>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <div className="bg-[#FFFFF4] flex flex-col w-[200px] h-[100vh] z-[50] px-[1rem]">
              <h3 className="text-[1.3rem] text-red-500 font-semibold pb-[1rem] pt-[3rem]">
                Menu
              </h3>
              <ul className="flex flex-col gap-[45px] w-fit">
                {/* /// Home /// */}
                <Link href={"/"}>
                  <li
                    onClick={() => {
                      setOpenDrawer(false);
                      setPathName("/");
                    }}
                    className={`flex items-center gap-[.5rem] cursor-pointer transition-all ${
                      pathName === "/"
                        ? "text-red-500 border-l-red-500 border-l-[2px] pl-[10px]"
                        : "text-[#888888]"
                    }`}
                  >
                    <span className="text-[20px]">
                      <BiHome className="translate-y-[-.1rem]" />
                    </span>
                    <span>Home</span>
                  </li>
                </Link>
                {/* /// history /// */}
                <Link href={`/orderhistory?email=${userLoad?.email}`}>
                  <li
                    onClick={() => {
                      setOpenDrawer(false);
                      setPathName("orderhistory");
                    }}
                    className={`flex items-center gap-[.5rem] cursor-pointer transition-all ${
                      pathName === "orderhistory"
                        ? "text-red-500 border-l-red-500 border-l-[2px] pl-[10px]"
                        : "text-[#888888]"
                    }`}
                  >
                    <span className="text-[20px]">
                      <BiHistory className="translate-y-[-.1rem]" />
                    </span>
                    <span>History</span>
                  </li>
                </Link>
                {!userLoad?.email ? (
                  <li
                    onClick={() => {
                      setShowAuthModal(true);
                      setOpenDrawer(false);
                      setPathName("authentication");
                    }}
                    className={`flex items-center gap-[.5rem] cursor-pointer transition-all ${
                      pathName === "authentication"
                        ? "text-red-500 border-l-red-500 border-l-[2px] pl-[10px]"
                        : "text-[#888888]"
                    }`}
                  >
                    <span className="text-[20px]">
                      <BiLogIn className="translate-y-[-.1rem]" />
                    </span>
                    <span>Login</span> <p className={styles.liBorder}></p>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      setShowLoginModal(true);
                      setOpenDrawer(false);
                      setUserModal(true);
                      setPathName("authentication");
                    }}
                    className={`flex items-center gap-[.5rem] cursor-pointer transition-all ${
                      pathName === "authentication"
                        ? "text-red-500 border-l-red-500 border-l-[2px] pl-[10px]"
                        : "text-[#888888]"
                    }`}
                  >
                    <span className="text-[20px]">
                      <BiUser className="translate-y-[-.1rem]" />
                    </span>
                    <span>Profile</span>
                  </li>
                )}
                <li
                  onClick={() => {
                    route.push("contactme");
                    setOpenDrawer(false);
                    setPathName("contact");
                  }}
                  className={`flex items-center gap-[.5rem] cursor-pointer transition-all ${
                    pathName === "contact"
                      ? "text-red-500 border-l-red-500 border-l-[2px] pl-[10px]"
                      : "text-[#888888]"
                  }`}
                >
                  <span className="text-[20px]">
                    <BiPhone />
                  </span>
                  <span>Contact</span> <p className={styles.liBorder}></p>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>

      {showLoginModal && <ProfileModal setShowLoginModal={setShowLoginModal} />}
    </>
  );
};

export default Handler;
