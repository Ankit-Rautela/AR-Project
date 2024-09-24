import { Fingerprint } from "lucide-react";

var currentDate = new Date();

const BelowFooter = () => {
  return (
    <>
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
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
        <div className="fixed bottom-12 right-12">
          <Fingerprint className="w-12 h-12 hover:text-red-600" />
          {/* Add update/Comming soon kind of update here */}
        </div>


      </div>
    </>
  );
};

export default BelowFooter;
