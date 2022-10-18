import { useCallback, useState } from "react";
import Card from "../../Components/Homepage/Card";

const Handler = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="w-[100vw] lg:w-[1170px] mx-auto">
      <div>
        <ul className="flex justify-around lg:justify-center lg:gap-[88px] mb-[45px]">
          <li
            onClick={() => setActiveCategory("All")}
            className={`text-[1rem] lg:text-[24px] cursor-pointer font-bold ${
              activeCategory.toLowerCase() === "all"
                ? "text-lightBlack"
                : "text-[#b7b7b7]"
            }`}
          >
            All
          </li>
          <li
            onClick={() => setActiveCategory("New Arrivals")}
            className={`text-[1rem] lg:text-[24px] cursor-pointer font-bold ${
              activeCategory.toLowerCase() === "New Arrivals".toLowerCase()
                ? "text-lightBlack"
                : "text-[#b7b7b7]"
            }`}
          >
            New Arrivals
          </li>
          <li
            onClick={() => setActiveCategory("Hot Sales")}
            className={`text-[1rem] lg:text-[24px] cursor-pointer font-bold ${
              activeCategory.toLowerCase() === "Hot Sales".toLowerCase()
                ? "text-lightBlack"
                : "text-[#b7b7b7]"
            }`}
          >
            Hot Sales
          </li>
        </ul>
        {/* Card Parent Div  */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] justify-center justify-items-center lg:justify-between">
          {products?.map((product) => (
            <Card key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Handler;
