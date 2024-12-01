import { Fingerprint } from "lucide-react";

var currentDate = new Date();

const BelowFooter = () => {
  return (
    <>
      <div className="w-full p-6 text-center bg-white ">
        <div>
          <h5 className="mb-2 text-3xl font-bold text-gray-900 ">
            Made with ❤️ -Ankit Rautela
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg ">
            Let's connect! Reach out to me and let's bring your ideas to life
            together.
          </p>
          <div>
            {currentDate.getFullYear()} &copy; copyright issues.
            <p> Feel free to copy. If you need any help, ping me !</p>
          </div>
        </div>
        <div className="fixed bottom-12 right-12">
          <Fingerprint className="w-12 h-12 hover:text-red-600" />
          {/* Add update/Comming soon kind of update here */}
        </div>
        

      </div>
      <div className="flex justify-center items-center bg-white">
          <img src="/src/assets/foot.jpg" alt="foot" className="max-w-full" />
        </div>
    </>
  );
};

export default BelowFooter;
