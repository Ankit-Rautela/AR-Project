import { useState } from "react";
import profilePic from "../assets/profilePic.png";
import { User } from "lucide-react";

const Navbar = ({ onRegisterClick }) => {
  const clickOnRegister = () => {
    console.log("Register Icon Clicked");
    onRegisterClick();
  };

  return (
    <>
      <div className="grid gap-4 min-h-[100px] sm:grid-cols-12 sm:sticky top-0 bg-white z-10 /*border-2 border-black*/">
        <div className="min-h-[100px] border-2 border-white rounded sm:col-span-2">
          <img className="w-20 h-20 mx-auto my-4" src={profilePic} alt="logo" />
        </div>
        <div className="min-h-[100px] border-2 border-white rounded font-extrabold sm:col-span-10 flex justify-center items-end flex-col mr-16">
          <div className="mb-2">
            <p>Register</p>
          </div>
          <div className="mr-4 cursor-pointer">
            <User onClick={clickOnRegister} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
