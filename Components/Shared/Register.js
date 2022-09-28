import Image from "next/image";
import Form from "./Form";
import LoginForm from "./LoginForm";
import { BiPlus } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { MdCancel } from 'react-icons/md'
import { useContext, useState } from "react";
import useAuthentication from "../../Authentication/useAuthentication";
import { async } from "@firebase/util";
import { ProductsContext } from "../../pages/_app";

const Handler = () => {
  const { setIsShowAuthModal } = useContext(ProductsContext);
  const [uploadImgUrl, setUploadImageUrl] = useState("");
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const {
    signInWithGoogle,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    errorSigninEmailPass,
    updateProfile,
    error,
  } = useAuthentication();

  // register user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (uploadImgUrl) {
      const name = e.target.personName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const personImg = uploadImgUrl;

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name, photoURL: personImg });
    }
  };

  // login user
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
  };

  // uploading image to image bb
  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=565f41ae1e5b8cd4d1430014c0206ed2`;
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    if (result.success) {
      setUploadImageUrl(result.data.url);
    }
  };
  return (
    <>
      <div
        className="w-[100%] h-[100%] z-[1000] fixed top-0 flex justify-center items-center"
        style={{ background: "rgba(0, 0, 0, .7)" }}
      >
        <div className="w-[450px] h-[550px] bg-[#F4F2EE] rounded-[1rem] relative">
          {/* image section  */}
          {isRegisterPage && (
            <div className="absolute top-[-10%]">
              <div className="flex justify-center w-[450px]">
                <div className="border border-gray-300 bg-white rounded-[50%] relative">
                  {!uploadImgUrl ? (
                    <img
                      src={"/default-image.png"}
                      width="100"
                      height="100"
                      className="object-contain rounded-[50%] bg-[#F4F2EE]"
                      alt="hello world"
                    />
                  ) : (
                    <img
                      src={uploadImgUrl}
                      className="w-[100px] h-[100px] object-contain rounded-[50%] relative"
                      alt="h3llo world"
                    />
                  )}
                  <label
                    htmlFor="personImage"
                    className="bg-gray-700 rounded-[50%] absolute bottom-[.4rem] right-[15%] text-[1.5rem] cursor-pointer"
                  >
                    <BiPlus className="text-gray-100" />
                  </label>
                  <input
                    onChange={(e) => uploadImage(e.target.files[0])}
                    type="file"
                    className="hidden"
                    name="personImage"
                    id="personImage"
                  />
                </div>
              </div>
            </div>
          )}

          {/* cross button  */}
          <div className="absolute top-[1rem] right-[1rem]">
            <span onClick={() => setIsShowAuthModal(false)}><MdCancel className="text-[2.5rem] cursor-pointer text-red-500 hover:text-red-600 transition-all"/></span>
          </div>

          <div className="mt-[3.5rem] mb-[1rem]">
            <h1 className="text-[2rem] font-bold text-lightBlack text-center">
              Please {
                isRegisterPage ? "Register" : "Login"
              }
            </h1>
            <h1 className="text-[1.2rem] text-center text-gray-700">
              Good Noon Sir,
            </h1>
          </div>
          <div>
            {isRegisterPage ? (
              <Form handleSubmit={handleSubmit} error={error} />
            ) : (
              <LoginForm
                handleLogin={handleLogin}
                errorSigninEmailPass={errorSigninEmailPass}
              />
            )}
          </div>
          {!isRegisterPage && (
            <div className="w-[60%] mx-auto mt-[2rem] flex justify-center">
              <button
                onClick={() => signInWithGoogle()}
                className="bg-blue-600  flex items-center shadow-md shadow-gray-400 text-gray-100"
              >
                <FcGoogle className="text-[2rem] bg-white p-[.5rem] box-content" />{" "}
                <span className="px-[1.5rem]">Sign in With Google</span>
              </button>
            </div>
          )}
          <div className="mt-[2rem]">
            {!isRegisterPage ? (
              <p className="text-center">
                {"I'm new Here. "}{" "}
                <span
                  onClick={() => setIsRegisterPage(true)}
                  className="text-blue-600 cursor-pointer"
                >
                  {"Create an account."}
                </span>
              </p>
            ) : (
              <p
                onClick={() => setIsRegisterPage(false)}
                className="text-center cursor-pointer"
              >
                {"Back to Login Page. "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Handler;
