import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { ProductsContext } from "../../pages/_app";
import useAuthentication from "../../Authentication/useAuthentication";

const Handler = ({ uploadImgUrl, setTryingUser }) => {
  const { createUserWithEmailAndPassword, updateProfile, error } = useAuthentication();
  const { setIsLoading } = useContext(ProductsContext);

  // states
  const [errMssg, setErrMssg] = useState("");
  const [validArr, setValidArr] = useState([]);

  // password states
  const [showPassword, setShowPassword] = useState(true);

  // register user
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (uploadImgUrl) {
      if (validArr.length >= 2) {
        const name = e.target.personName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const personImg = uploadImgUrl;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name, photoURL: personImg });
        setTryingUser("register");
        setIsLoading(false);
      } else{
        setIsLoading(false);
        if(validArr.indexOf(1) === -1){
          setErrMssg("Invalid Email")
        } else if(validArr.indexOf(2) === -1) {
          setErrMssg("Your password should be 8 characters long and one lower case, one uppercase letter.")
        }
      }
    } else {
      toast.error("Please add your image");
      setIsLoading(false);
    }
  };

  const errorMessage = error?.message?.split("/")[1].split(").")[0];
  let message = ""
  if(errorMessage || errMssg){
    if(errMssg){
      message = errMssg
    } else{
      message = errorMessage
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[1.5rem] w-[60%] h-[100%] mx-auto"
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
          // email validate function 
            onBlur={(e) => {
              const value = e.target.value;
              const validateEmail = (email) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };

              const isValidEmail = validateEmail(value);
              if (isValidEmail?.length) {
                setErrMssg("");
                setValidArr([...validArr, 1]);
              } else {
                setErrMssg("Invalid Email");
                const arr = validArr?.filter((el) => el !== 1);
                setValidArr(arr);
              }
            }}
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
          //  password validate function 
            onBlur={(e) => {
              const value = e.target.value;
              const validatePassword = (password) => {
                return String(password).match(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                );
              };

              const isValidPass = validatePassword(value);

              if (isValidPass) {
                setErrMssg("");
                setValidArr([...validArr, 2]);
              } else {
                setErrMssg(
                  "Your password should be 8 characters long and one lower case, one uppercase letter."
                );
                const arr = validArr?.filter((el) => el !== 2);
                setValidArr(arr);
              }
            }}
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
          {/* error shown here  */}
          <div className={`mb-[.5rem] ${message ? "visible" : "invisible"}`}>
            <p className="text-red-600 text-[15px] ml-[1rem] tracking-wider">
              {message ? message : "h3llo world"}
            </p>
          </div>
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
