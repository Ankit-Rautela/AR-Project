import React from "react";
import Frontlogo from "../assets/FrontLogo.png";
const ProfileBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
        <div className="min-h-[100px] border-2 border-white rounded mx-auto my-auto font-extrabold text-6xl">
          <h1>Hi, I'm Ankit Rautela.</h1>
          <div className="text-base">
            <p>I am an Associate Consultant at Saint-Gobain </p>

            <p>As well as a full-stack web developer with expertise in Front End.</p>
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
