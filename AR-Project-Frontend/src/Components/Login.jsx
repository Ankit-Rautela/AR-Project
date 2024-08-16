import { useState, useRef } from "react";
import { X } from "lucide-react";

const Login = ({ onClose }) => {
    const modalRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const closeForm = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            let response = await fetch('http://localhost:8000/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Parse the JSON response
            response = await response.json;

            // Store the response in localStorage
            localStorage.setItem("user", JSON.stringify(response));

            // Close the login form
            onClose();
            alert('Login successful!');

        } catch (error) {
            console.log('Error during login:', error);
            alert('Something went wrong, please try again.');
        }
    };

    return (
        <>
            <div
                ref={modalRef}
                onClick={closeForm}
                className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"
            >
                <div className="flex flex-col gap-5 mt-10 text-white">
                    <button onClick={onClose} className="mr-4 place-self-end">
                        <X size={30} />
                    </button>
                    <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                Login
                            </h5>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="ankit.rautela@saint-gobain.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your password
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
