import ShowsPaths from "../../Components/Shared/DisplayPaths";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Handler = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_KEY,
      process.env.NEXT_PUBLIC_TEMPLATE_KEY,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_KEY
    )
    .then(result => {
      toast.success("Successfully You Send a Email.")
    })
    .catch(err => {
      toast.error(err.message)
    })
  };

  return (
    <div>
      <ShowsPaths
        heading={"Contact with Me"}
        paths={["home", "contact with me"]}
      />

      {/* main container  */}
      <div className="w-[1170px] mx-auto flex gap-[2rem]">
        {/* left side div  */}
        <div className="w-[50%]">
          <p className="tracking-wide">
            {`Hi I’m Md. Arafat Hossan Lisan. I’m a Professional Front-end
            Developer. I have a single year of experience as a Front-end
            developer. I have enough knowledge about HTML, CSS, Bootstrap,
            Tailwind, JavaScript, React.js, Next.js . Now I'm seeking an
            entry-level position with a company to use my skills in coding and
            to get opportunities to work on real projects. Thank You.`}
          </p>
          <div className="mt-[2rem]">
            <span className="text-[20px] font-bold tracking-wide">
              Connect with me on
            </span>
            <div className="flex items-center gap-[.5rem] text-gray-500">
              <a
                href="https://www.facebook.com/arafat.hossan.lisan/"
                target={"blank"}
              >
                <span>
                  <FaFacebookSquare className="w-fit text-[1.7rem] cursor-pointer hover:text-[#1877F2] transition-all" />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/arafathossanlisan/"
                target={"blank"}
              >
                <span>
                  <FaLinkedin className="w-fit text-[1.7rem] cursor-pointer hover:text-[#1877F2] transition-all" />
                </span>
              </a>

              <a href="https://github.com/arafatlsn" target={"blank"}>
                <span>
                  <FaGithubSquare className="w-fit text-[1.7rem] cursor-pointer hover:text-[#1877F2] transition-all" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* rigth side div  */}
        <div className="w-[50%]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-[2rem]"
          >
            <div className="flex gap-[1rem] w-[100%]">
              <input
                className="w-[50%] py-[.7rem] text-gray-500 border border-gray-300 focus:ring-0 focus:border-gray-300"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="w-[50%] py-[.7rem] borde text-gray-500 border-gray-300 focus:ring-0 focus:border-gray-300"
                type="email"
                name="email"
                placeholder="Email"
                id="userEmail"
                required
              />
            </div>
            <textarea
              className="w-[100%] max-h-[300px] min-h-[300px] py-[.7rem] borde text-gray-500 border-gray-300 focus:ring-0 focus:border-gray-300"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <div>
              <button
                className="w-[40%] bg-[#111111] text-white py-[1rem] uppercase tracking-wide"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[1170px] mx-auto"></div>
    </div>
  );
};

export default Handler;
