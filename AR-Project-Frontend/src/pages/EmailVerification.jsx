import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthstore } from "../store/authStore";
import toast from "react-hot-toast";

const EmailVerification = () => {

    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const {error,isLoading, verifyEmail} = useAuthstore()

    const handleChange = (index, value) => {
        const newCode = [...code];

        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            inputRefs.current[focusIndex].focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join("");
        try {
            await verifyEmail(verificationCode);
            navigate("/services");
            toast.success("Email verified sccessfully");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (code.every((digit) => digit !== "")) {
            handleSubmit(new Event("submit"));
        }
    }, [code]);

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h5 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                            Verify Your Email
                        </h5>
                        <p className='text-center text-gray-300 mb-6'>Enter the 6-digit code sent to your email address.</p>
                        <div className='flex justify-between'>
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type='text'
                                    maxLength='6'
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className='w-12 h-12 text-center text-2xl font-bold bg-white text-gray-500 border-2 border-black rounded-lg focus:border-gray-300 focus:outline-none'
                                />
                            ))}
                        </div>
                        {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                        >
                            {isLoading ? "Verifying..." : "Verify Email"}
                        </button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default EmailVerification