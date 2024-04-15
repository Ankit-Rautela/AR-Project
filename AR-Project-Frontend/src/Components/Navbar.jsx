import React from "react";
import profilePic from "../assets/profilePic.png";

const Navbar = () => {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-12 fixed top-0 left-0 right-0 bg-white z-10">
        <div className="min-h-[100px] border-2 border-white rounded sm:col-span-2">
          <img className="w-20 h-20 mx-auto my-4" src={profilePic} alt="logo" />
        </div>
        <div className="min-h-[100px] border-2 border-white rounded font-extrabold sm:col-span-10 flex justify-end items-center">
          <button className="bg-gray-400 text-black px-6 py-3 mx-0 rounded-full hover:bg-black mr-4 hover:text-white hidden sm:block">
            LogIn
          </button>
          <button className="bg-gray-400 text-black px-6 py-3 mx-0 rounded-full mr-4 hover:bg-black hover:text-white hidden sm:block">
            SignUp
          </button>
        </div>
      </div>
      <div className="mt-20">
      </div>
    </>
  );
};

export default Navbar;
