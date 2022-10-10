import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../_app";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { RiSecurePaymentFill } from "react-icons/ri";
import TableComp from "../../Components/Cartpage/TableComp";
import DisplayPaths from "../../Components/Shared/DisplayPaths";
import toast from "react-hot-toast";

const Handler = () => {
  const { cart, setCart, createCheckoutSession } = useContext(ProductsContext);

  const [isCouponUsed, setIsCouponUsed] = useState(false);

  let subTotal = 0;
  let discount = 0;
  let total = 0;

  cart?.forEach((el) => {
    subTotal = subTotal + el.price * el.cartQuantity;
  });

  const handleCouponUse = async (e) => {
    e.preventDefault();

    const couponInput = e.target.coupon.value;
    if (couponInput === "mdarafathossanlisan") {
      setIsCouponUsed(true);
      toast.success("Successfully you've used coupon!");
    } else {
      toast.error("Invalid Coupon Code");
    }
  };

  if (isCouponUsed) {
    discount = (subTotal * 10) / 100;
  }

  total = subTotal - discount;

  return (
    // main container
    <div>
      {/* display paths container  */}

      <DisplayPaths heading={"shoping cart"} paths={["home", "shoping cart"]} />

      <div className="w-[1170px] mx-auto flex gap-[1.5rem]">
        {/* left side div  */}
        <div className="w-[70%]">
          {cart.length ? (
            <TableComp cart={cart} setCart={setCart} />
          ) : (
            <div className="bg-[#F3F2EE] flex flex-col justify-center items-center min-h-[40vh]">
              <HiOutlineEmojiSad className="text-[3rem] text-gray-400" />
              <p className="text-[1.1rem] tracking-wider text-gray-400">
                Your Cart is Empty
              </p>
            </div>
          )}
        </div>
        {/* right side div  */}
        <div className="w-[30%] bg-[#F3F2EE] h-min p-[1rem]">
          <div>
            <form onSubmit={handleCouponUse}>
              <div className="flex">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  className="w-[70%] border-gray-300 text-[17px] px-[1rem] py-[.65rem] focus:ring-0 focus:border-gray-300 tracking-wider"
                  placeholder="type your coupon"
                />
                <button
                  type="submit"
                  className="w-[30%] text-[16px] tracking-wider bg-gray-900 text-white px-[1rem] py-[.6rem] transition-all"
                >
                  Apply
                </button>
              </div>
            </form>
            <p className="text-[13px] text-red-500">
              * Your coupon code: mdarafathossanlisan
            </p>
          </div>
          <div className="bg-white p-[1rem] mt-[2rem] rounded-[5px]">
            <div className="flex flex-col gap-[.3rem] mt-[.5rem] p-[1rem]">
              <div>
                <h1 className="text-[17px] uppercase tracking-wider">
                  Cart Total
                </h1>
                <div className="mt-[1rem] flex flex-col gap-[.5rem]">
                  <div className="flex justify-between">
                    <p className="tracking-wider">Subtotal</p>
                    <p className="text-red-600">BDT {subTotal}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="tracking-wider">Discount</p>
                    <p className="text-red-600">BDT {discount}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="tracking-wider">Total</p>
                    <p className="text-red-600">BDT {total}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={createCheckoutSession}
                className="text-[14px] w-[100%] py-[.7rem] mt-[1rem] border bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-[4px] tracking-wider  flex justify-center items-center gap-[.3rem] transition-all"
              >
                <RiSecurePaymentFill className="text-[1.2rem]" /> Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
