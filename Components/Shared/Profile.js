import Image from "next/image";
import useAuthentication from "../../Authentication/useAuthentication";
import styles from "../../styles/NavBar.module.css";
import { MdEmail } from "react-icons/md";
import { signOut } from "firebase/auth";
import auth from "../../Authentication/Firebase.init";
import defaultImg from "../../Assets/Icon/default-img.png";

const Handler = () => {
  const { userLoad } = useAuthentication();
  return (
    <div
      className={`bg-[#F0EFF5] w-[350px] px-[1rem] py-[.8rem] overflow-hidden translate-x-[-2rem] mt-[1rem] absolute z-[100] ${styles.cartUi} ${styles.profileDiv}`}
    >
      <div className="flex items-center gap-[.5rem]">
        <div>
          {userLoad?.photoURL ? (
            <Image
              src={userLoad?.photoURL}
              width="60px"
              height="60px"
              className="rounded-[50%] border-[3px] border-white box-content"
              alt="user-img"
            />
          ) : (
            <Image
              src={defaultImg}
              width="60px"
              height="60px"
              alt="default-img"
            />
          )}
        </div>
        <div>
          <h1 className="text-[1.2rem] text-gray-700 tracking-wide font-bold capitalize whitespace-nowrap truncate">
            {userLoad?.displayName}
          </h1>
        </div>
      </div>
      <div className="py-[1rem] flex flex-col gap-[1rem]">
        {/* email field  */}
        <div className="flex items-center relative">
          <label htmlFor="email" className=" absolute left-[1rem]">
            <MdEmail className="text-gray-700 text-[1.5rem]" />
          </label>
          <input
            type="text"
            className="bg-white border-none focus:border-none focus:outline-none rounded-[1.5rem] w-[100%] pl-[3rem]"
            value={userLoad?.email}
            name="email"
            id="email"
          />
        </div>

        {/* signout button  */}
        <div>
          <button
            onClick={() => signOut(auth)}
            className="bg-gray-700 text-[whitesmoke] text-[15px] up px-[2rem] py-[.3rem] rounded-[1.5rem] tracking-wider"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Handler;
