import React from "react";
import Frontlogo from "../assets/FrontLogo.png"
const ProfileBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
        <div className="min-h-[100px] border-2 border-white rounded mx-auto my-auto font-extrabold">
          <h1>Hi, This is Ankit Rautela.</h1>
          <p>I am a full stack web developer with expertise in Front End.</p>
        </div>
        <div className="min-h-[100px] border-2 border-white rounded">
        <img className="w-80 h-80 mx-auto my-4" src={Frontlogo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;
