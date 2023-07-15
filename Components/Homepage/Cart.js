import { useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { ProductsContext } from "../../pages/_app";
import { useRecoilState } from "recoil";
import { cartState } from "../../AtomStates/ProductStates";

const Handler = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { title, price, img, cartQuantity } = product;
  const removerFromCart = (id) => {
    const filterCart = cart.filter((el) => el._id !== id);
    setCart(filterCart);
    localStorage.setItem("cart", JSON.stringify(filterCart));
  };

  return (
    <div className="flex justify-center gap-[.3rem] items-center border-b border-gray-400 px-[.3rem] py-[.5rem]">
      <div className="w-fit">
        <img src={img} alt="" className="w-[60px] h-[60px] object-contain" />
      </div>
      <div className="w-[80%] grid grid-cols-12 items-center gap-[1rem]">
        <p className="text-[15px] h-[6ex] col-start-1 col-end-6 leading-[2ex] overflow-hidden box-content">
          {title}
        </p>
        <p className="text-[15px] col-start-6 col-end-7">{cartQuantity}x</p>
        <p className="text-[15px] whitespace-nowrap col-start-7 col-end-11">
          {price * cartQuantity} BDT
        </p>
        <div
          onClick={() => removerFromCart(product._id)}
          className="col-start-11 col-end-13 cursor-pointer"
        >
          <FaRegTimesCircle className="text-[1.3rem] rounded-[50%] text-red-700" />
        </div>
      </div>
    </div>
  );
};

export default Handler;
