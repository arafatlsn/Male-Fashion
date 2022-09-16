import Image from "next/image";
import bannerOne from "../../Assets/Homepage/banner-1.jpg";
import bannerTwo from "../../Assets/Homepage/banner-2.jpg";
import bannerThree from "../../Assets/Homepage/banner-3.jpg";

const Handler = () => {
  return (
    <div className="w-[1170px] mb-[100px] mx-auto grid grid-cols-12 justify-between gap-[5rem]">
      {/* first banner  */}
      <div className="col-start-1 col-end-11 row-start-1 row-end-2 justify-self-end">
        <div className="w-content h-[440px] relative">
          <Image
            src={bannerOne}
            className="w-[440px] h-[440px] object-contain"
            alt="h3llo world"
          />
          <div className="h-[440px] absolute top-0">
            <div className="h-[100%] flex justify-center items-center">
              <h1 className="text-[36px] font-bold ml-[-160%]">
                Clothing <br /> Collection 2030
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* second banner  */}
      <div className="col-start-1 col-end-6 row-start-2 row-end-3 mt-[-11rem]">
        <div className="w-fit">
          <Image
            src={bannerTwo}
            className="w-[557px] h-[557px] object-contain"
            alt="h3llo world"
          />
        </div>
        <div>
          <h1 className="text-[36px] font-bold">
            Accessories
          </h1>
        </div>
      </div>
      {/* third banner  */}
      <div className="col-start-6 col-end-13 row-start-2 row-end-3 justify-self-end">
        <div className="w-content h-[440px] relative">
          <Image
            src={bannerThree}
            className="w-[440px] h-[440px] object-contain"
            alt="h3llo world"
          />
          <div className="h-[440px] absolute top-0">
            <div className="h-[100%] flex justify-center items-center">
              <h1 className="text-[36px] font-bold ml-[-160%]">
                Shoe Spring <br/> 2030
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
