import { MdEmail } from "react-icons/md";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import useAuthentication from "../../Authentication/useAuthentication";
import { useEffect, useState } from "react";
import {
  showAuthModalState,
  successSnackbar,
  successSnackbarMssg,
} from "../../AtomStates/ProductStates";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";

const Handler = ({ setTryingUser }) => {
  const {
    signInWithEmailAndPassword,
    userSigninEmailPass,
    errorSigninEmailPass,
  } = useAuthentication();
  const [showSuccussSnackbar, setShowSuccessSnackbar] =
    useRecoilState(successSnackbar);
  const [successText, setSuccessText] = useRecoilState(successSnackbarMssg);
  const [showAuthModal, setShowAuthModal] = useRecoilState(showAuthModalState);

  // password states
  const [showPassword, setShowPassword] = useState(true);

  // login user
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
    setTryingUser("login");
  };

  useEffect(() => {
    if (userSigninEmailPass?.user?.email) {
      setSuccessText("Successfully, You Signed In!");
      setShowSuccessSnackbar(true);
      setShowAuthModal(false);
    } else if (errorSigninEmailPass?.message) {
      toast.error(errorSigninEmailPass?.message?.split("Error")[1], {
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
  }, [userSigninEmailPass?.user?.email, errorSigninEmailPass?.message]);

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-[1.5rem] w-[80%] lg:w-[60%] h-[100%] mx-auto"
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
            onClick={() => setTryingUser("login")}
            className="bg-gray-700 text-[whitesmoke] px-[2.5rem] py-[.5rem] rounded-[1.5rem] tracking-wider"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Handler;
