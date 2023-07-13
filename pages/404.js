import Image from "next/image";
import notfoundGif from "../Assets/Icon/not-found.gif";
import Link from "next/link";
import { BiHome } from "react-icons/bi";

const Custom404 = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="flex flex-col items-center relative">
        <Image src={notfoundGif} alt="failed-gif" />
        <div className="flex flex-col items-center">
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

export default Custom404;