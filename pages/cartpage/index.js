import { useRouter } from "next/router";
import { useContext } from "react";
import TableComp from "../../Components/Cartpage/TableComp";
import { ProductsContext } from "../_app";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'

const Handler = () => {
  const { cart, setCart, createCheckoutSession } = useContext(ProductsContext);
  const router = useRouter();
  
  return (
    <div className="w-[1170px] mx-auto flex gap-[1.5rem]">
      {/* left side div  */}
      <div className="w-[70%]">
        {cart.length ? (
          <TableComp cart={cart} setCart={setCart} />
        ) : (
          <div className="bg-gray-200 flex flex-col justify-center items-center min-h-[40vh]">
            <HiOutlineEmojiSad className="text-[3rem] text-gray-400" />
            <p className="text-[1.1rem] tracking-wider text-gray-400">
              Your Cart is Empty
            </p>
          </div>
        )}
      </div>
      {/* right side div  */}
      <div className="w-[30%] bg-[whitesmoke] p-[1rem]">
        <div>
          <p className="text-[16px] text-green-800 tracking-wider cursor-pointer">
            Get a Coupon Code.
          </p>
          <p className="text-[14px] text-gray-500">
            Your coupon code: 13324324234
          </p>
          <form>
            <div className="flex gap-[.5rem]">
              <input
                type="text"
                name="coupon"
                id="coupon"
                className="w-[50%] border-none bg-green-200 text-green-800 text-[14px] py-[.1rem] rounded-[4px]"
                placeholder="type your coupon"
              />
              <button
                type="submit"
                className="text-[14px] bg-gray-200 hover:bg-gray-300 text-gray-800 py-[.1rem] px-[.7rem] rounded-[4px] transition-all"
              >
                Use Coupon
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-[1rem] mt-[.5rem] rounded-[5px]">
          <table className="w-[100%]">
            <tr>
              <td>
                <p className="text-gray-600 text-left font-semibold">
                  Subtotal:{" "}
                </p>
              </td>
              <td>
                <span className="ml-[.5rem] text-gray-800">$000</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-gray-600 text-left font-semibold">
                  Discount (10% off):{" "}
                </p>
              </td>
              <td>
                <span className="ml-[.5rem] text-green-800">$000</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-gray-600 text-left font-semibold">
                  Tax (6% +):{" "}
                </p>
              </td>
              <td>
                <span className="ml-[.5rem] text-red-800">$000</span>
              </td>
            </tr>
            <tr style={{ borderTop: "2px solid #B4B9BC" }}>
              <td>
                <p className="text-gray-600 text-left font-semibold">Total: </p>
              </td>
              <td>
                <span className="ml-[.5rem] text-gray-800">$000</span>
              </td>
            </tr>
          </table>
          <div className="flex flex-col gap-[.3rem] mt-[.5rem]">
            <button
              onClick={() => router.push("/")}
              className="text-[14px] w-[100%] py-[.3rem] border bg-green-200 hover:bg-green-300 text-green-800 rounded-[4px] tracking-wider flex justify-center items-center gap-[.3rem] transition-all whitespace-nowrap"
            >
              <MdOutlineShoppingCart className="text-[1.2rem]" /> Continue Shoping
            </button>
            <button onClick={createCheckoutSession} className="text-[14px] w-[100%] py-[.3rem] border bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-[4px] tracking-wider  flex justify-center items-center gap-[.3rem] transition-all">
              <RiSecurePaymentFill className="text-[1.2rem]" /> Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
