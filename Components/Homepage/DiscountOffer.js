import Image from "next/image";
import { useEffect, useState } from "react";
import BagImg from "../../Assets/Homepage/product-sale.png";

const Handler = () => {
  const [active, setActive] = useState("");
  const [timer, setTimer] = useState([]);

  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    const today = new Date();
    let offerEnding = new Date(today);
    const loadDiscountTimer = JSON.parse(localStorage.getItem("discountTimer"));
    if (!loadDiscountTimer) {
      offerEnding.setDate(today.getDate() + 30);
      const nes = offerEnding.toString().split(" ");
      localStorage.setItem("discountTimer", JSON.stringify(nes));
    } else {
      const dateString = `${loadDiscountTimer[1]} ${loadDiscountTimer[2]} ${loadDiscountTimer[3]} ${loadDiscountTimer[4]}`;
      const todayTime = today.getTime();
      const endingTime = new Date(dateString).getTime();

      const distanceTime = endingTime - todayTime;

      const reamainingDays = Math.floor(distanceTime / (1000 * 60 * 60 * 24));

      const remainingHours = Math.floor(
        (distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const remainingMinutes = Math.floor(
        (distanceTime % (1000 * 60 * 60)) / (1000 * 60)
      );

      const remainingSeconds = Math.floor((distanceTime % (1000 * 60)) / 1000);

      setTimer([
        reamainingDays,
        remainingHours,
        remainingMinutes,
        remainingSeconds,
      ]);
    }
  }, [countDown]);

  const countDownInterval = setInterval(() => {
    setCountDown(countDown + 1);
    clearInterval(countDownInterval);
  }, 1000);

  return (
    <div className="bg-[#F3F2EE] py-[8rem] mt-[5rem] px-[1rem] lg:px-0">
      <div className="lg:w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-[3rem] ">
        <div className="grid grid-cols-2 justify-between justify-items-center items-center w-[100%] lg:w-[60%] ">
          <div>
            <h1
              onClick={() => setActive("accessories_hot")}
              className={`text-[dimgray] text-[20px] lg:text-[2rem] font-bold tracking-wide cursor-pointer transition-all ${
                active === "accessories_hot" &&
                "text-gray-700 translate-x-[.7rem]"
              }`}
            >
              Accessories Hot
            </h1>
            <h1
              onClick={() => setActive("clothing_hot")}
              className={`text-[dimgray] text-[20px] lg:text-[2rem] font-bold tracking-wide cursor-pointer transition-all ${
                active === "clothing_hot" && "text-gray-700 translate-x-[.7rem]"
              }`}
            >
              Clothings Hot
            </h1>
            <h1
              onClick={() => setActive("shoes_hot")}
              className={`text-[dimgray] text-[20px] lg:text-[2rem] font-bold tracking-wide cursor-pointer transition-all ${
                active === "shoes_hot" && "text-gray-700 translate-x-[.7rem]"
              }`}
            >
              Shoes Hot
            </h1>
          </div>
          <div>
            <Image src={BagImg} alt="h3llo world" />
          </div>
        </div>

        {/* timer div  */}
        <div className="w-[100%] lg:w-[40%]">
          <div>
            <p className="uppercase text-red-500 tracking-wider text-[15px] font-bold">
              deal of the Week
            </p>
            <h1 className="text-[2.3rem] font-bold tracking-wide mt-[1rem] mb-[1rem]">
              Multi Pocker Chest Bag
            </h1>
          </div>

          <div className="flex justify-around lg:justify-center lg:gap-[1.5rem]">
            <div className="flex flex-col justify-center items-center">
              <span className="text-[1.8rem] lg:text-[2.5rem] font-bold mr-[.3rem]">
                {timer[0]}
              </span>
              <span className="font-bold tracking-wide">Days</span>
            </div>
            <p className="text-[2.2rem] text-gray-600">:</p>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[1.8rem] lg:text-[2.5rem] font-bold mr-[.3rem]">
                {timer[1]}
              </span>
              <span className="font-bold tracking-wide">Hours</span>
            </div>
            <p className="text-[2.2rem] text-gray-600">:</p>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[1.8rem] lg:text-[2.5rem] font-bold mr-[.3rem]">
                {timer[2]}
              </span>
              <span className="font-bold tracking-wide">Minutes</span>
            </div>
            <p className="text-[2.2rem] text-gray-600">:</p>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[1.8rem] lg:text-[2.5rem] font-bold mr-[.3rem]">
                {timer[3]}
              </span>
              <span className="font-bold tracking-wide">Seconds</span>
            </div>
          </div>
          <div className="mt-[2rem]">
            <button className=" bg-lightBlack text-white px-[1.8rem] lg:px-[2.5rem] py-[1rem] tracking-[.3rem] uppercase">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
