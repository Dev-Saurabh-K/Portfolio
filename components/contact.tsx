import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex flex-col h-96 bg-accent w-full justify-center items-center">
      Contact Me!
      {/* <img src="/instagram.svg" className="" alt="" /> */}
      <div className="flex flex-row h-fit justify-center items-center">

        <div className="flex flex-col justify-center items-center">
          <p>Get in Touch</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p>Connect with Me</p>
          <div className="flex flex-row gap-5">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>

      </div>
      Comming soon!
    </div>
  );
};

export default ContactMe;
