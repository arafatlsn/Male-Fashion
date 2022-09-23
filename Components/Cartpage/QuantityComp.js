import { useState } from "react";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { TiArrowSync } from "react-icons/ti";

const Handler = ({ product, updateQuantity, removeProduct }) => {
  const { _id, cartQuantity } = product;
  const [quantity, setQuantity] = useState(cartQuantity);
  return (
    <>
      <div className="flex items-center gap-[1rem]">
        <div className="flex items-center">
          <span className=" text-green-800 text-[14px] w-[40px] py-[.55rem] flex justify-center border">
            {quantity}
          </span>
          <div className="flex flex-col">
            <span
              onClick={() => setQuantity(quantity + 1)}
              className=" hover:bg-gray-200 transition-all text-green-700 cursor-pointer text-[1.1rem] px-[.3rem] border"
            >
              <BiPlus />
            </span>
            <span
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className=" hover:bg-gray-200 transition-all text-green-700 cursor-pointer text-[1.1rem] px-[.3rem] border"
            >
              <BiMinus />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[.5rem]">
          <span onClick={() => updateQuantity(_id, quantity)} >
            <TiArrowSync className="text-[1.5rem] bg-green-300 text-green-800 p-[.3rem] box-content cursor-pointer rounded-[4px]"/>
          </span>
          <span onClick={() => removeProduct(_id)}>
            <BiTrash className="text-[1.5rem] bg-red-300 text-red-800 p-[.3rem] box-content cursor-pointer rounded-[4px]"/>
          </span>
        </div>
      </div>
    </>
  );
};

export default Handler;
