import React from "react";
import { Search, Linkedin, Github, Twitter } from "lucide-react";
import profilePic from "../assets/profilePic.png";
const Footer = () => {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-12 mb-0">
        <div className="min-h-[100px] border-2 border-white rounded /*shadow-xl*/ sm:col-span-6   sm:block ">
          <img className="w-28 h-28 mx-auto my-4" src={profilePic} alt="logo" />
        </div>
        <div className="min-h-[100px] border-2 border-white rounded /*shadow-xl*/ sm:col-span-6 sm:block ">
          <div className="flex justify-center font-extrabold my-4">
            <p>Follow us</p>
          </div>
          <div className="flex justify-center gap-10 my-8">
            <a href="https://www.linkedin.com/in/ankit-rautela/">
              <Linkedin />
            </a>
            <a href="https://github.com/Ankit-Rautela">
              <Github />
            </a>
            <a href="https://twitter.com/CodeByAnkit">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
