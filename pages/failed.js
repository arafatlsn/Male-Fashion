import Image from "next/image";
import failedGif from "../Assets/Icon/failed.gif";
import Link from "next/link";
import { BiHome } from "react-icons/bi";

const Handler = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="flex flex-col items-center gap-[1rem] relative">
        <div className="w-[150px] h-[150px] relative">
          <Image className="object-cover" src={failedGif} layout="fill" alt="failed-gif" />
        </div>
        <div className="flex flex-col items-center mt-[1rem]">
          <p className="text-[1.5rem] text-red-500 font-semibold">
            UNSUCCESSFUL PAYMENT
          </p>
          <Link href={"/"}>
            <button className="text-gray-600 font-bold tracking-wider flex items-center gap-[.5rem] mt-[1rem]">
              <BiHome className="text-[1.2rem] translate-y-[-.1rem]" /> Go To
              HomePage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Handler;
