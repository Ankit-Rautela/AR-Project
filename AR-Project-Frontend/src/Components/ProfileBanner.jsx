import React from "react";
import Frontlogo from "../assets/FrontLogo.png";
const ProfileBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white my-10">
        <div className="min-h-[100px] border-2 border-white rounded mx-auto pl-12 my-auto ml-15 mr-2 mt-10 font-extrabold text-8xl">
          <h1>Hi, I'm <span className="text-gray-500">Ankit</span></h1>
          <div className="text-xl mt-6 ml-2 pt-2">
            <p>I am an Associate Consultant at Saint-Gobain.</p>
          </div>
          <div className="text-xl mt-1 ml-2 p-0">
            <p>Specializing as a full-stack web developer with expertise in Frontend development.</p>
          </div>
        </div>
        <div className="min-h-[100px] border-2 border-white rounded">
          <img className="w-80 h-80 mx-auto my-4" src={Frontlogo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;
