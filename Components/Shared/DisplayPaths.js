import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";

const Handler = ({ heading, paths }) => {

  const route = useRouter();

  return (
    <div className="bg-[#F3F2EE] mb-[3rem] py-[3rem]">
      <div className="w-[100vw] mt-[5rem] lg:mt-0 lg:w-[1170px] mx-auto">
        <h3 className=" capitalize text-[24px] text-[#111111] font-bold">
          {heading}
        </h3>
        <span className="flex items-center">
          <span onClick={() => route.push("/")} className="capitalize cursor-pointer">{paths[0]}</span>
          <span className="text-[1.3rem]">
            <MdKeyboardArrowRight />
          </span>
          <span className="capitalize text-[dimgray]">{paths[1]}</span>
        </span>
      </div>
    </div>
  );
};

export default Handler;
