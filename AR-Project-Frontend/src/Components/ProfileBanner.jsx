import Frontlogo from "../assets/FrontLogo.png";
import { Linkedin, Github, Twitter } from "lucide-react";
const ProfileBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white-500 mr-10 ml-10">
        <div className="min-h-[100px] sm:mx-auto rounded mx-auto pl-12 my-auto ml-10 mr-2 mt-10 font-extrabold text-8xl">
          <h1>Hi, I'm <span className="text-gray-500 sm:text-gray-500">Ankit</span></h1>
          <h1><span className="text-gray-500 sm:text-gray-500">Rautela</span></h1>
          <div className="text-xl mt-6 ml-2 pt-2">
            <p>I am a Software Engineer.</p>
          </div>
          <div className="text-xl mt-1 ml-2 p-0">
            <p> Currently working at <a className="text-blue-800" target="_blank" href="https://www.saint-gobain.co.in/indec">Saint-Gobain</a>.</p>
          </div>
          <div className="flex justify-center gap-10 my-10 mr-80">
            <a href="https://www.linkedin.com/in/ankit-rautela/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com/Ankit-Rautela" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://twitter.com/CodeByAnkit" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>
        </div>
        <div className="min-h-[100px]  rounded flex justify-center items-center -z-50">
          <img className="w-80 h-80 spin-slow" src={Frontlogo} alt="logo" />
        </div>

      </div>
    </>
  );
};

export default ProfileBanner;
