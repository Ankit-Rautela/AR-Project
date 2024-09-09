import { Mail, Lock, Loader } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../Components/Input";
import { useAuthstore } from "../store/authStore";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, error, isLoading} = useAuthstore();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <h5 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                            Welcome Back
                        </h5>

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

                        <div className="flex items-center mb-6">
                            <Link to='/forgot-password' className="text-sm text-gray-400 hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        {error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 transform hover:scale-105 focus:scale-105">
                            {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto"/> : "Login"}
                        </button>
                        <p className='text-sm text-gray-400'>
                            Don't have an account?{" "}
                            <Link to={"/signup"} className='text-black hover:underline'>
                                Signup
                            </Link>
                        </p>
                    </form>
                </div >
            </div >
        </>
    );
};

export default Login;