import React from "react";

var currentDate = new Date();

const BelowFooter = () => {
  return (
    <>
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Made with ❤️ -Ankit Rautela
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Let's connect! Reach out to me and let's bring your ideas to life
          together.
        </p>
        <div>
          <p>&copy; {currentDate.getFullYear()}, All rights reserved.</p>
        </div>
        
      </div>
    </>
  );
};

export default BelowFooter;
