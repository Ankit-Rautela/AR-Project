import React from "react";
import { Link } from "react-router-dom";
import { Power } from "lucide-react";

let redirectFunction = () => {
  console.log("Redirecting to Home Page");
};

const StartButton = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center grey">
        <Link to="/Home" onClick={redirectFunction}>
          <Power 
            size={50}
            strokeWidth={1.75}
            className="text-gray-500 hover:text-black "
          />
        </Link>
      </div>
    </>
  );
};

export default StartButton;
