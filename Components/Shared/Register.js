import Image from "next/image";
import Form from "./Form";
import LoginForm from "./LoginForm";
import { BiUpload } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import useAuthentication from "../../Authentication/useAuthentication";
import toast from "react-hot-toast";
import { Dialog } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  showAuthModalState,
  showLoaderState,
} from "../../AtomStates/ProductStates";
import defaultImg from "../../Assets/Icon/default-img.png";

const Handler = () => {
  const [showAuthModal, setShowAuthModal] = useRecoilState(showAuthModalState);
  const [showLoader, setShowLoader] = useRecoilState(showLoaderState);
  const [uploadImgUrl, setUploadImageUrl] = useState("");
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [tryingUser, setTryingUser] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { userLoad } = useAuthentication();

  // uploading image to image bb
  const uploadImage = async (image) => {
    try {
      setShowAuthModal(false);
      setShowLoader(true);
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=565f41ae1e5b8cd4d1430014c0206ed2`;
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      setShowLoader(false);
      setShowAuthModal(true);
      if (result.success) {
        setUploadImageUrl(result.data.url);
      }
    } catch (err) {
      toast.error(err.message);
      setShowLoader(false);
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <Dialog
        maxWidth="xl"
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      >
        <div className="w-[300px] lg:w-[450px] min-h-[550px] bg-[#F4F2EE] rounded-[1rem] relative pt-[2rem] pb-[1rem]">
          {/* image section  */}
          {isRegisterPage && (
            <div className="flex justify-center lg:w-[450px]">
              <div className="border border-gray-300 bg-white rounded-[50%] relative">
                <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center items-center relative">
                  {!uploadImgUrl ? (
                    <div className="w-[100%] h-[100%] relative">
                      <Image
                        priority
                        src={defaultImg}
                        layout="fill"
                        className="object-contain rounded-[50%] bg-[#F4F2EE]"
                        alt="user-img"
                      />
                      <div>
                        <label
                          htmlFor="personImage"
                          className="w-[100%] h-[100%] flex justify-center items-center bg-[#7c555580] rounded-[50%] absolute top-0 left-0 text-[1.5rem] cursor-pointer"
                        >
                          <BiUpload className="text-[2rem] text-white" />
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
                  ) : (
                    <Image
                      priority
                      src={uploadImgUrl}
                      layout="fill"
                      className="object-contain rounded-[50%] bg-[#F4F2EE]"
                      alt="user-img"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* cross button  */}
          <div className="absolute top-[1rem] right-[1rem]">
            <span onClick={() => setShowAuthModal(false)}>
              <MdCancel className="text-[2.5rem] cursor-pointer text-red-500 hover:text-red-600 transition-all" />
            </span>
          </div>

          <div className="mb-[1rem]">
            <h1 className="text-[2rem] font-bold text-lightBlack text-center">
              Please {isRegisterPage ? "Register" : "Login"}
            </h1>
          </div>
          <div>
            {isRegisterPage ? (
              <Form uploadImgUrl={uploadImgUrl} setTryingUser={setTryingUser} />
            ) : (
              <LoginForm setTryingUser={setTryingUser} />
            )}
          </div>
          <div className="mt-[2rem]">
            {!isRegisterPage ? (
              <div className="text-center">
                <span>{"I'm new Here. "}</span>
                <span
                  onClick={() => setIsRegisterPage(true)}
                  className="text-blue-600 hover:underline transition-all cursor-pointer"
                >
                  {"Create an account."}
                </span>
              </div>
            ) : (
              <p
                onClick={() => setIsRegisterPage(false)}
                className="text-center text-blue-600 hover:underline transition-all cursor-pointer"
              >
                {"Back to Login Page. "}
              </p>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Handler;
