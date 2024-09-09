import { useState } from "react";
import { useAuthstore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Components/Input";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { resetPassword, error, isLoading, message } = useAuthstore();

    const { token } = useParams();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

		e.preventDefault();

        if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

        try {
			await resetPassword(token, password);

			toast.success("Password reset successfully, redirecting to login page...");
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (error) {
			console.error(error);
			toast.error(error.message || "Error resetting password");
		}
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">
                    
                        <h5 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                            Reset Password
                        </h5>
                        {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
				        {message && <p className='text-green-500 text-sm mb-4'>{message}</p>}   
                        <form onSubmit={handleSubmit}>
					<Input
						icon={Lock}
						type='password'
						placeholder='New Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<Input
						icon={Lock}
						type='password'
						placeholder='Confirm New Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>

					<button
						className='w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 transform hover:scale-105 focus:scale-105'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? "Resetting..." : "Set New Password"}
					</button>
				</form>
                </div>
            </div>
        </>
    )
}

export default ResetPassword