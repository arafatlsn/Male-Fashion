import { signOut } from "firebase/auth";
import Image from "next/image";
import { MdCancel, MdEmail } from "react-icons/md";
import auth from "../../Authentication/Firebase.init";
import useAuthentication from "../../Authentication/useAuthentication";

const Handler = ({ setShowLoginModal }) => {
  const { userLoad } = useAuthentication();

  if(!userLoad?.email){
    setShowLoginModal(false)
  }

  return (
    <div
      className="lg:hidden w-[100vw] h-[100vh] fixed top-0 z-[200] flex justify-center items-center relative"
      style={{ background: "rgba(0, 0, 0, .8)" }}
    >
      <div className="w-[80vw] pt-[1rem] pb-[2rem] bg-[whitesmoke] rounded-[1rem]">

          {/* cross button  */}
          <div className="absolute top-[1rem] right-[1rem]">
            <span onClick={() => setShowLoginModal(false)}>
              <MdCancel className="text-[2.5rem] cursor-pointer text-red-500 hover:text-red-600 transition-all" />
            </span>
          </div>

        <div className="flex flex-col items-center gap-[.5rem]">
          <div>
            {userLoad?.photoURL ? (
              <img
                src={userLoad?.photoURL}
                width="60px"
                height="60px"
                className="rounded-[50%] border-[3px] border-white box-content"
                alt="h3llo word"
              />
            ) : (
              <Image
                src={"/default-image.png"}
                width="60px"
                height="60px"
                alt="h3llo world"
              />
            )}
          </div>
          <div>
            <h1 className="text-[1.2rem] text-gray-700 tracking-wide font-bold capitalize whitespace-nowrap truncate">
              {userLoad?.displayName}
            </h1>
          </div>
        </div>
        <div>
          {/* email field  */}
          <div className="px-[1rem] mb-[2rem]">
            <span>
              <i className="text-[14px] text-gray-600">Email:</i>
            </span>
            <p>{userLoad?.email}</p>
          </div>

          {/* signout button  */}
          <div className="px-[1rem]">
            <button
              onClick={() => signOut(auth)}
              className="bg-gray-700 text-[whitesmoke] text-[15px] up px-[2rem] py-[.3rem] rounded-[1.5rem] tracking-wider"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
