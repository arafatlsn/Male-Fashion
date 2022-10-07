import { BarLoader } from "react-spinners";

const Handler = () => {
  return (
    <div
      className="w-[100%] h-[100%] z-[1000] fixed top-0 flex justify-center items-center"
      style={{ background: "rgba(0, 0, 0, .8)" }}
    >
      <div className="flex flex-col items-center gap-[.3rem]">
        <h1 className="text-white text-[17px] tracking-wider">Wait a Sec....</h1>
        <BarLoader width={"120px"} color="#fff" />
      </div>
    </div>
  );
};

export default Handler;
