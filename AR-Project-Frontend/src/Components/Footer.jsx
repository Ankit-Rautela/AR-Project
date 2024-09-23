import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";
import profilePic from "../assets/profile-pic.png";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center">
        <div className="grid gap-4 sm:grid-cols-12 mb-0">
          <div className="min-h-[100px] rounded sm:col-span-6 hidden sm:block"> 
            <img className="w-28 h-28 mx-auto my-4" src={profilePic} alt="logo" />
          </div>
          <div className="min-h-[100px] rounded sm:col-span-12 flex flex-col "> 
            <div className="flex justify-center font-extrabold my-4">
              <p>Follow me</p>
            </div>
            <div className="flex justify-center gap-10 my-4 ">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
