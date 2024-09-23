import { useState } from 'react'
import { useAuthstore } from '../store/authStore';
import Input from '../Components/Input';
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState( );

    const { isLoading, forgotPassword } = useAuthstore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center h-screen bg-(rgb(233, 229, 218)) bg-opacity-30 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">

                    <h5 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                        Forgot password
                    </h5>

                    {!isSubmitted ? (<form onSubmit={handleSubmit}>
                        <p className='text-gray-300 mb-6 text-center'>
                            Enter your email address
                            <br />
                            we'll send you a link to reset your password.
                        </p>
                        <Input
                            icon={Mail}
                            type='email'
                            placeholder='Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            className='w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 transform hover:scale-105 focus:scale-105'
                            type='submit'
                        >
                            {isLoading ? <Loader className='size-6 animate-spin mx-auto' /> : "Send Reset Link"}
                        </button>
                    </form>) : (
                        <div className='text-center'>
                            <div
                                className='w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4'
                            >
                                <Mail className='h-8 w-8 text-white' />
                            </div>
                            <p className='text-black mb-6'>
                                If an account exists for {email}, you will receive a password reset link shortly.
                            </p>
                        </div>)}

                
                <div className='px-8 py-4 bg-white bg-opacity-50 flex justify-center'>
				<Link to={"/login"} className='text-sm text-gray-400 hover:underline flex items-center'>
					<ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
				</Link>
                </div>
			</div>
            </div>
        </>
    )
}

export default ForgotPassword