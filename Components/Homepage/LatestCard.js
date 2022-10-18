import Image from "next/image";
import { BsCalendar2Week } from "react-icons/bs";
import styles from "../../styles/Banner.module.css";

const Handler = ({ el }) => {
  return (
    <div className={`lg:w-[30%] relative mb-[5rem] ${styles.card}`}>
      <div>
        <Image src={el.img} alt="h3llo world" />
      </div>
      <div className="px-[2rem] absolute mt-[-2.5rem]">
        <div className="px-[2rem] py-[1.7rem] bg-white">
          <p className="flex items-center gap-[.3rem] text-[14px] text-[dimgray]">
            <BsCalendar2Week />
            {el.date}
          </p>
          <h1 className="text-[1.2rem] tracking-wide text-gray-700 whitespace-pre-wrap mt-[.5rem] mb-[.7rem]">
            {el.text}
          </h1>
          <div>
            <button className="text-[15px] text-gray-800 font-bold tracking-wider uppercase">
              Read More <p className={`${styles.shopNowBorder}`}></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
