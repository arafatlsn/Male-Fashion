import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuthentication from "../../Authentication/useAuthentication";
import {
  showAuthModalState,
  successSnackbar,
  successSnackbarMssg,
} from "../../AtomStates/ProductStates";
import { useRecoilState } from "recoil";

const Handler = ({ uploadImgUrl, setTryingUser }) => {
  const {
    createUserWithEmailAndPassword,
    userCreating,
    loadingUserCreating,
    errorCreatingUser,
    updateProfile,
  } = useAuthentication();
  const [showSuccussSnackbar, setShowSuccessSnackbar] =
    useRecoilState(successSnackbar);
  const [successText, setSuccessText] = useRecoilState(successSnackbarMssg);
  const [showAuthModal, setShowAuthModal] = useRecoilState(showAuthModalState);

  // states
  const [errMssg, setErrMssg] = useState("");
  const [validArr, setValidArr] = useState([]);

  // password states
  const [showPassword, setShowPassword] = useState(true);

  // register user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (uploadImgUrl) {
      const name = e.target.personName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const personImg = uploadImgUrl;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({
        displayName: name,
        photoURL: personImg,
      });
    } else {
      toast.error("Please add your image", {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
          background: "whitesmoke",
        },
        iconTheme: {
          primary: "red",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  useEffect(() => {
    if (userCreating?.user?.email) {
      setSuccessText("Successfully, You Signed Up!");
      setShowSuccessSnackbar(true);
      setShowAuthModal(false);
    } else if (errorCreatingUser?.message) {
      toast.error(errorCreatingUser?.message?.split("Error")[1], {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
          background: "whitesmoke",
        },
        iconTheme: {
          primary: "red",
          secondary: "#FFFAEE",
        },
      });
    }
  }, [userCreating?.user?.email, errorCreatingUser?.message]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[1.5rem] w-[80%] lg:w-[60%] h-[100%] mx-auto"
      >
        {/* name field  */}
        <div className="flex items-center relative">
          <label htmlFor="personName" className=" absolute left-[1rem]">
            <FaUserEdit className="text-gray-700 text-[1.5rem]" />
          </label>
          <input
            type="text"
            className="bg-white border-none focus:ring-0 rounded-[1.5rem] w-[100%] pl-[3rem]"
            placeholder="type your name"
            name="personName"
            id="personName"
            required
          />
        </div>
        {/* email field  */}
        <div className="flex items-center relative">
          <label htmlFor="email" className=" absolute left-[1rem]">
            <MdEmail className="text-gray-700 text-[1.5rem]" />
          </label>
          <input
            type="email"
            className="bg-white border-none focus:ring-0 rounded-[1.5rem] w-[100%] pl-[3rem]"
            placeholder="type your email"
            name="email"
            id="email"
            required
          />
        </div>

        {/* password field  */}
        <div className="flex items-center relative">
          <label htmlFor="password" className=" absolute left-[1rem]">
            {showPassword ? (
              <BsFillEyeSlashFill
                onClick={() => setShowPassword(false)}
                className="text-gray-700 text-[1.5rem] cursor-pointer"
              />
            ) : (
              <BsFillEyeFill
                onClick={() => setShowPassword(true)}
                className="text-gray-700 text-[1.5rem] cursor-pointer"
              />
            )}
          </label>
          <input
            type={`${showPassword ? "password" : "text"}`}
            className="bg-white border-none focus:ring-0 rounded-[1.5rem] w-[100%] pl-[3rem]"
            placeholder="type your password"
            name="password"
            id="password"
            required
          />
        </div>

        {/* register button  */}
        <div>
          <button
            onClick={() => setTryingUser("register")}
            className="bg-gray-700 text-[whitesmoke] px-[2.5rem] py-[.5rem] rounded-[1.5rem] tracking-wider"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Handler;
