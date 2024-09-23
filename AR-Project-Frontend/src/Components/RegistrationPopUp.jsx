import { useState, useRef } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const RegistrationPopUp = ({ onClose }) => {

    const modalRef = useRef();

    const closeForm = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };
    return (
        <>
            <div ref={modalRef}
                onClick={closeForm}
                className="fixed inset-0 flex items-center justify-center h-screen bg-(rgb(233, 229, 218)) bg-opacity-30 backdrop-filter backdrop-blur-sm">
                <div className="flex flex-col gap-5 mt-10 text-white">
                    <button onClick={onClose} className="mr-4 place-self-end">
                        <X size={30} />
                    </button>
                    <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">
                        <h1 className="text-black">Navigation Board </h1>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-white bg-black rounded hover:bg-black-600"
                        >
                            <Link to="/signup" className="text-white">Signup/Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationPopUp