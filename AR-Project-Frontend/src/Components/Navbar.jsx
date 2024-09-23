import profilePic from "../assets/profile-pic.png";
import { User } from "lucide-react";
import { useState } from "react";

import RegistrationPopUp from "./RegistrationPopUp";

const Navbar = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  return (
    <>
      <div className="grid gap-4 min-h-[100px] sm:grid-cols-12 shadow-xl sm:sticky top-0 bg-white">
        <div className="min-h-[100px] rounded sm:col-span-2">
          <img className="w-20 h-20 mx-auto my-4" src={profilePic} alt="logo" />
        </div>
        <div className="min-h-[100px] rounded font-extrabold px-16 sm:col-span-10 flex justify-center items-end flex-col mr-16">
          <div className="mb-2">
            <p>Register Now!</p>
          </div>
          <div className="mr-10 cursor-pointer">
            <button onClick={() => setShowSuggestion(true)}>
              <User />
            </button>
            {showSuggestion && <RegistrationPopUp onClose={() => setShowSuggestion(false)} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
