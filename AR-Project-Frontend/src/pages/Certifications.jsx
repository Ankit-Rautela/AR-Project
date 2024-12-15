import { register } from 'swiper/element/bundle';
import certificatePic from "../assets/certificate.webp";
import certificatePic2 from "../assets/STIBO-Certificate.png";

const Certifications = () => {
    register();

    return (
        <>
            <div className='relative z-50'>
                <div className="flex justify-center my-8">
                    <p className="font-extrabold text-5xl">
                        Certifications</p>
                </div>

                <swiper-container slides-per-view="1" pagination="true" navigation="true" >
                    <swiper-slide>
                        <div className='grid gap-4 min-h-[100px] '>
                            <div className="grid gap-y-4 sm:grid-cols-12">
                                <div className="sm:col-span-6 mt-6 flex flex-col items-center">
                                    <a
                                        className="h-60 flex justify-center"
                                        target="_blank"
                                        href="https://namastedev.com/ankitrautela044/certificates/namaste-node"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="border-2 border-black h-full object-contain"
                                            src={certificatePic}
                                            alt="certificate"
                                        />
                                    </a>

                                    <div className="grid gap-4 min-h-[100px] place-items-center">
                                        <div className="mt-0">
                                            <p className="text-center -mt-10">Namaste Node.Js</p>
                                        </div>
                                    </div>


                                </div>
                                <div className="sm:col-span-6 flex flex-col justify-center items-center h-48 mt-14">
                                    <p className="text-black text-2xl">Completed certification in Node.Js, focusing on building scalable server-side applications and mastering asynchronous programming with <strong>RESTful APIs</strong>.</p>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='grid gap-4 min-h-[100px] '>
                            <div className="grid gap-y-4 sm:grid-cols-12">
                                <div className="sm:col-span-6 mt-6 flex flex-col items-center">
                                    <a
                                        className="h-60 flex justify-center"
                                        target="_blank"
                                        href="https://stibo.peopleway.net/ease/faces/jsfui/myEase/certificate.xhtml?og=1&crypt=U6p9sF6kPOVl22eHzZBsIANJKXR8BIk6qLZrSxPuR3eEt8fksdJCkDxhMErul7_iQQ&companyId=1310"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="border-2 border-black h-full object-contain"
                                            src={certificatePic2}
                                            alt="certificate"
                                        />
                                    </a>

                                    <div className="grid gap-4 min-h-[100px] place-items-center">
                                        <div className="mt-0">
                                            <p className="text-center -mt-10">MDM Solution Fundamentals</p>
                                        </div>
                                    </div>


                                </div>
                                <div className="sm:col-span-6 flex flex-col justify-center items-center h-48 mt-14">
                                    <p className="text-black text-2xl">Certified in Master Data Management (MDM) Solution Fundamentals, gaining expertise in managing enterprise data consistency, governance, and integration to drive efficient business processes.</p>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>


            </div>
        </>
    )
}

export default Certifications