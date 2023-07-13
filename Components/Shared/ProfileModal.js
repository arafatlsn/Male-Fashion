import { signOut } from "firebase/auth";
import Image from "next/image";
import { MdCancel, MdEmail } from "react-icons/md";
import auth from "../../Authentication/Firebase.init";
import useAuthentication from "../../Authentication/useAuthentication";
import { Dialog } from "@mui/material";
import { useRecoilState } from "recoil";
import { profileModal } from "../../AtomStates/HomePageStates";

const Handler = () => {
  const { userLoad } = useAuthentication();
  const [showModal, setShowModal] = useRecoilState(profileModal);

  if (!userLoad?.email) {
    setShowLoginModal(false);
  }

  return (
    <Dialog open={showModal} onClose={() => setShowModal(false)}>
      <div className="w-[80vw] pt-[1rem] pb-[2rem] bg-[whitesmoke] rounded-[1rem]">
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
    </Dialog>
  );
};

export default Handler;
