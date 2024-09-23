import { Mail, User, Lock, Loader } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../Components/Input";
import { useAuthstore } from "../store/authStore";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading} = useAuthstore();

  const handleSignUp = async (e) => {

    e.preventDefault();

    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center h-screen bg-(rgb(233, 229, 218)) bg-opacity-30 backdrop-filter backdrop-blur-sm">
        <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">
          <form className="space-y-6" onSubmit={handleSignUp}>
            <h5 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Create Account
            </h5>

            <Input
              icon={User}
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              icon={Mail}
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              icon={Lock}
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500 font-semifold mt-2">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 transform hover:scale-105 focus:scale-105"
            >
              {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Signup"}
            </button>
            <p className='text-sm text-gray-400'>
              Already have an account?{" "}
              <Link to={"/login"} className='text-black hover:underline'>
                Login
              </Link>
            </p>
          </form>
        </div>

      </div>
    </>
  );
};

export default Signup;
