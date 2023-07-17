import Image from "next/image";
import logo from "../../Assets/Homepage/footer-logo.png";
import payment from "../../Assets/Homepage/payment.png";

const Handler = () => {
  return (
    <div className="bg-[#111111]">
      <div className="px-[1rem] lg:px-0 lg:w-[1170px] mx-auto flex flex-wrap justify-between gap-y-[2rem] mt-[7rem] text-white py-[5rem]">
        {/* first div  */}
        <div className="w-[262px] flex flex-col gap-[2rem]">
          <div>
            <Image src={logo} alt="h3llo world" />
          </div>
          <p className="tracking-wide text-[#b7b7b7] text-[15px]">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
          <div>
            <Image src={payment} alt="h3llo world" />
          </div>
        </div>

        {/* second div  */}
        <div className="w-[100%] lg:w-[46%] flex gap-[2rem] lg:gap-0 lg:justify-around">
          <div>
            <ul>
              <li className="font-bold tracking-[.2rem] mb-[1rem] uppercase">
                Shoping
              </li>
              <div className="flex flex-col gap-[.8rem]">
                <li className="text-[#b7b7b7]">Shoping Store</li>
                <li className="text-[#b7b7b7]">Trending Shoes</li>
                <li className="text-[#b7b7b7]">Accessories</li>
                <li className="text-[#b7b7b7]">Sale</li>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold tracking-[.2rem] mb-[1rem] uppercase">
                Shoping
              </li>
              <div className="flex flex-col gap-[.8rem]">
                <li className="text-[#b7b7b7]">Contact Us</li>
                <li className="text-[#b7b7b7]">Payment Methods</li>
                <li className="text-[#b7b7b7]">Delivary</li>
                <li className="text-[#b7b7b7]">Return & Exchanges</li>
              </div>
            </ul>
          </div>
        </div>

        {/* third div */}
        <div className="w-[100%] lg:w-[23%]">
          <ul>
            <li className="font-bold tracking-[.2rem] mb-[1rem] uppercase">
              NEWLETTER
            </li>
            <div className="flex flex-col gap-[.8rem]">
              <li className="text-[#b7b7b7] whitespace-pre-wrap">
                Be the first to know about new arrivals, look books, sales &
                promos!
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Handler;
