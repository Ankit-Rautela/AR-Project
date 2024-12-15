import { Fingerprint } from "lucide-react";
import footImg from "/src/assets/foot.jpg";
import sign from "/src/assets/sign.png";

const BelowFooter = () => {
  return (
    <>
      <div className="w-full p-6 text-center bg-white ">
        <div>
          <h5 className="mb-2 text-1xl font-bold text-gray-900 ">
            Made with ❤️ in India
          </h5>
          <div>
            {/* {currentDate.getFullYear()}  */}
            No &copy; copyright issues.
            <p> Feel free to copy. If you need any help, ping me !</p>
          </div>
        </div>
        <div className="fixed bottom-6 right-12">
          <Fingerprint className="w-12 h-12 hover:text-red-600" />
          {/* Add update/Comming soon kind of update here */}
        </div>
        <div className="fixed bottom-6 w-18">
          <img src={sign} alt="sign" />
        </div>
      </div>
      <div className="flex justify-center items-center bg-white">
        <img src={footImg} alt="foot" className="max-w-full" />
      </div>
    </>
  );
};

export default BelowFooter;
