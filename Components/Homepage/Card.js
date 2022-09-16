import { FiHeart } from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import styles from "../../styles/Card.module.css";
import { Rating } from "flowbite-react";

const Handler = ({ product }) => {
  const { title, price, img } = product;
  let category;
  if(product?.category.length){
    if(product?.category === "new"){
      category = <p className="bg-[white] text-lightBlack text-[11px] px-[15px] py-[2px] font-semibold uppercase">New</p>
    } else{
      category = <p className="text-[white] bg-lightBlack text-[11px] px-[15px] py-[2px] font-semibold uppercase">Sale</p>
    }
  }
  return (
    <div className={styles.card}>
      <div className="w-[262.5px] h-[260px] overflow-hidden relative">
        <img
          src={img}
          className="w-[262.5px] h-[260px] object-contain"
          alt="h3llo world"
        />
        <div className="absolute z-[100] top-[1rem]">
          {
            category
          }
        </div>
        <div
          className={`absolute z-[100] top-[.9rem] right-[1rem] flex flex-col gap-[.7rem] ${styles.cardHiddenIcon}`}
        >
          <span>
            <FiHeart className="text-lightBlack text-[1.3rem] bg-[white] p-[.5rem] box-content cursor-pointer" />
          </span>
          <span>
            <BsArrowLeftRight className="text-lightBlack text-[1.3rem] bg-[white] p-[.5rem] box-content cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="w-[262.5px] pt-[25px]">
        <p className="truncate">{title}</p>
        <div>
          <Rating>
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={false} />
          </Rating>
        </div>
        <div className="flex justify-between items-center w-content overflow-hidden">
          <p className="text-[20px] font-bold text-lightBlack">${price}</p>
          <p
            className={`text-[15px] font-bold whitespace-nowrap mr-[.5rem] text-[#e53637] hover:text-[#ff0000] transition-all cursor-pointer ${styles.cardText}`}
          >
            + Add To Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Handler;
