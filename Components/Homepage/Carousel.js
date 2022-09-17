import Image from "next/image";
import bannerOne from "../../Assets/Homepage/hero-1.jpg";
import bannerTwo from "../../Assets/Homepage/hero-2.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Handler = () => {
  const [banner, setBanner] = useState(bannerOne);
  const [changed, setChanged] = useState(true);

  useEffect(() => {
    const func = () => {
      const bannerImage = document.getElementById("bannerImage");
      const headingAnimate = document.getElementById("headingAnimate");
      const paraAnimate = document.getElementById("paraAnimate");
      const buttonAnimate = document.getElementById("buttonAnimate");
      const summerText = document.getElementById("summerText");

      bannerImage.classList.remove("animate__animated","animate__fadeIn");
      headingAnimate.classList.remove("animate__animated",  "animate__fadeInUp")
      paraAnimate.classList.remove("animate__animated",  "animate__fadeInUp")
      buttonAnimate.classList.remove("animate__animated",  "animate__fadeInUp")
      summerText.classList.remove("animate__animated",  "animate__fadeInUp")
      setTimeout(() => {
        bannerImage.classList.add("animate__animated", "animate__fadeIn");
        headingAnimate.classList.add("animate__animated",  "animate__fadeInUp")
        paraAnimate.classList.add("animate__animated",  "animate__fadeInUp")
        buttonAnimate.classList.add("animate__animated",  "animate__fadeInUp")
        summerText.classList.add("animate__animated",  "animate__fadeInUp")
        if(banner?.src === "/_next/static/media/hero-1.c8ac25c7.jpg"){
          setBanner(bannerTwo)
        } else{
          setBanner(bannerOne)
        }
      })
    };
    func();
  }, [changed]);

  return (
    <>
      <div className="w-content h-content relative mb-[90px]">
        <Image
          src={banner}
          alt="h3llo world"
          id="bannerImage"
          className="animate__slow"
        ></Image>
        <div className="absolute inset-y-0 left-[20%] flex flex-col justify-center gap-[28px]">
          <h6 id="summerText" className="text-lightRed uppercase text-[14px] font-semibold">
            Summer Collection
          </h6>
          <h1 id="headingAnimate" className="text-[48px] font-bold leading-[58px]">
            Fall - Winter <br /> Collections 2022
          </h1>
          <p id="paraAnimate" className="w-[457px] animate__animated animate__fadeInUp">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ab
            eveniet quae commodi iure voluptate quis perspiciatis! Animi,
            similique sunt?
          </p>
          <div id="buttonAnimate" className="animate__animated animate__fadeInUp">
            <button className="px-[30px] py-[15px] text-[13px] uppercase font-bold bg-black text-white tracking-[4px] flex items-center gap-[.5rem]">
              Shop Now <HiArrowNarrowRight className="text-[1.5rem]" />
            </button>
          </div>
        </div>
        {/* arrow button  */}
        <div
          onClick={() => {
            setChanged(!changed)
          }}
          className="absolute inset-y-0 left-[10%] flex items-center"
        >
          <span>
            <FaLongArrowAltLeft className="text-[2.5rem] cursor-pointer" />
          </span>
        </div>
        <div
          onClick={() => {
            setChanged(!changed)
          }}
          className="absolute inset-y-0 right-[10%] flex items-center"
        >
          <span>
            <FaLongArrowAltRight className="text-[2.5rem] cursor-pointer" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Handler;
