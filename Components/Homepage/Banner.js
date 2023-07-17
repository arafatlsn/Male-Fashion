import Image from "next/image";
import styles from "../../styles/Banner.module.css";
import banner3 from "../../Assets/Homepage/banner-3.jpg";

const Handler = () => {
  return (
    <div className="w-[100vw] lg:w-[1170px] mb-[100px] mx-auto lg:grid lg:grid-cols-12 justify-between gap-[5rem]">
      {/* first banner  */}
      <div
        className={`lg:col-start-1 lg:col-end-11 lg:row-start-1 lg:row-end-2 justify-self-end ${styles.card}`}
      >
        <div className="w-content h-[440px] relative">
          <div className="absolute  right-0 lg:relative">
            <div className="w-[260px] h-[260px] lg:w-[440px] lg:h-[440px] relative">
              <Image
                priority
                src={"/banner-1.jpg"}
                layout="fill"
                alt="h3llo world"
              />
            </div>
          </div>
          <div className="h-[440px] absolute bottom-[3.5rem] lg:top-0">
            <div className="h-[100%] flex flex-col justify-center items-center">
              <h1 className="text-[26px] lg:text-[36px] font-bold lg:ml-[-160%]">
                Clothing <br /> Collection 2022
              </h1>
              <div className="lg:ml-[-223%]">
                <button className="uppercase">
                  Shop Now <p className={`${styles.shopNowBorder}`}></p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second banner  */}
      <div
        className={`h-[210px] lg:h-[440px] lg:col-start-1 lg:col-end-6 lg:row-start-2 lg;row-end-3 mt-[-11rem] relative ${styles.card}`}
      >
        <div className="absolute top-0 lg:relative lg:w-fit">
          <div className="w-[260px] h-[260px] lg:w-[440px] lg:h-[440px] relative">
            <Image
              priority
              src={"/banner-2.jpg"}
              layout="fill"
              alt="h3llo world"
            />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 lg:relative">
          <h1 className="text-[26px] lg:text-[36px] font-bold">Accessories</h1>
          <div className="ml-[3rem] lg:ml-0">
            <button className="uppercase">
              Shop Now <p className={`${styles.shopNowBorder}`}></p>
            </button>
          </div>
        </div>
      </div>
      {/* third banner  */}
      <div
        className={`hidden lg:block col-start-6 col-end-13 row-start-2 row-end-3 justify-self-end ${styles.card}`}
      >
        <div className="w-content h-[440px] relative">
          <div className="w-[60vw] lg:w-[440px] lg:h-[440px] relative">
            <Image priority src={banner3} layout="fill" alt="h3llo world" />
          </div>
          <div className="h-[440px] absolute top-0">
            <div className="h-[100%] flex flex-col justify-center items-center">
              <h1 className="text-[36px] font-bold ml-[-160%]">
                Shoe Spring <br /> 2022
              </h1>
              <div className="ml-[-217%]">
                <button className="uppercase">
                  Shop Now <p className={`${styles.shopNowBorder}`}></p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
