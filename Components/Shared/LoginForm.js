import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Handler = ({ handleLogin, errorSigninEmailPass }) => {
  const errorMessage = errorSigninEmailPass?.message?.split("/")[1].split(").")[0];
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-[1.5rem] w-[60%] h-[100%] mx-auto"
      >
        {/* email field  */}
        <div className="flex items-center relative">
          <label htmlFor="email" className=" absolute left-[1rem]">
            <MdEmail className="text-gray-700 text-[1.5rem]" />
          </label>
          <input
            type="text"
            className="bg-white border-none focus:ring-0 rounded-[1.5rem] w-[100%] pl-[3rem]"
            placeholder="type your email"
            name="email"
            id="email"
          />
        </div>
        {/* password field  */}
        <div className="flex items-center relative">
          <label htmlFor="password" className=" absolute left-[1rem]">
            <RiLockPasswordFill className="text-gray-700 text-[1.5rem]" />
          </label>
          <input
            type="password"
            className="bg-white border-none focus:outline-0 focus:ring-0 rounded-[1.5rem] w-[100%] pl-[3rem]"
            placeholder="type your password"
            name="password"
            id="password"
          />
        </div>
        {/* error shown here  */}
        <div className={`${errorMessage ? "visible" : "invisible"}`}>
          <p className="text-red-600 text-[14px] ml-[1rem]">{errorMessage}</p>
        </div>
        {/* register button  */}
        <div>
          <button className="bg-gray-700 text-[whitesmoke] px-[2.5rem] py-[.5rem] rounded-[1.5rem] tracking-wider">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Handler;
