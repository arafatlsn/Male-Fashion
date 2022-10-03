import { useState } from "react";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { TiArrowSync } from "react-icons/ti";

const Handler = ({ product, updateQuantity }) => {
  const { _id, cartQuantity } = product;
  const [quantity, setQuantity] = useState(cartQuantity);
  return (
    <>
      <div className="flex items-center gap-[1rem]">
        <div className="flex items-center">
          <span
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            className=" hover:bg-gray-200 transition-all text-green-700 cursor-pointer text-[1.1rem] p-[.5rem]"
          >
            <BiMinus />
          </span>
          <span className=" text-green-800 text-[17px] w-[40px] py-[.55rem] flex justify-center">
            {quantity}
          </span>

          <span
            onClick={() => setQuantity(quantity + 1)}
            className=" hover:bg-gray-200 transition-all text-green-700 cursor-pointer text-[1.1rem] p-[.5rem]"
          >
            <BiPlus />
          </span>
        </div>
        <div className="flex items-center gap-[.5rem]">
          <span onClick={() => updateQuantity(_id, quantity)}>
            <TiArrowSync className="text-[1.5rem] bg-[#F3F2EE] text-green-800 p-[.3rem] box-content cursor-pointer rounded-[4px]" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Handler;
