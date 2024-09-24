import profilePic from "../assets/profile-pic.png";
import { User, File, SquarePen } from "lucide-react";
import { useState } from "react";

import RegistrationPopUp from "./RegistrationPopUp";

const Navbar = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  return (
    <>
      <div className="grid gap-4 min-h-[100px] sm:grid-cols-12 shadow-xl sm:sticky top-0 bg-white">
        <div className="min-h-[100px] rounded bg-white sm:col-span-2">
          <img className="w-20 h-20 mx-auto my-4" src={profilePic} alt="logo" />
        </div>
        <div className="min-h-[100px] rounded font-extrabold bg-white px-16 sm:col-span-10 flex justify-center items-end flex-col">
          <div className="flex gap-10 my-10 ml-auto">
            <div className="">
              <div className="ml-4">
                <p>Explore:)</p>
              </div>
              <div className="mr-10 cursor-pointer">
                <button onClick={() => setShowSuggestion(true)}>
                  <User className="ml-10" />
                </button>
                {showSuggestion && <RegistrationPopUp onClose={() => setShowSuggestion(false)} />}
              </div>
            </div>
            <div className="">
              <div className="ml-4">
                <p>Resume:)</p>
              </div>
              <div className="mr-10 cursor-pointer">
                <button onClick={() => window.open('https://drive.google.com/file/d/15Xr57bq7IkZHquHPD4fJpEhDE569nIt9/view?usp=sharing', '_blank')}>
                  <File className="ml-10" />
                </button>
              </div>
            </div>
            <div className="">
              <div className="ml-4">
                <p>Blog:)</p>
              </div>
              <div className="mr-10 cursor-pointer">
                <button className="relative">
                  <SquarePen className="ml-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
