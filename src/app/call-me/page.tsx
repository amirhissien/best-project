"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaGithub,
    FaMapMarkerAlt
} from "react-icons/fa";

import { motion } from "framer-motion";


export default function Call() {


    const contactItems = [
        {
            icon:<FaPhoneAlt />,
            title:"شماره تماس",
            text:"09308471049",
            color:"text-primary"
        },

        {
            icon:<FaEnvelope />,
            title:"ایمیل",
            text:"amirhosseinus@gmail.com",
            color:"text-danger"
        },

        {
            icon:<FaGithub />,
            title:"گیت‌هاب",
            text:"github.com/amirhissien",
            color:"text-dark"
        },

        {
            icon:<FaMapMarkerAlt />,
            title:"موقعیت",
            text:"ایران",
            color:"text-success"
        }
    ];



    return (

        <div className="container py-5">


            <motion.div

                className="row justify-content-center"

                initial={{
                    opacity:0,
                    y:80
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:0.8
                }}

            >


                <div className="col-lg-8">



                    <motion.div

                        className="card border-0 shadow-lg rounded-5 p-5"

                        whileHover={{
                            y:-10
                        }}

                        transition={{
                            duration:0.3
                        }}

                    >




                        <motion.h1

                            className="text-center fw-bold mb-3"

                            initial={{
                                opacity:0,
                                y:-30
                            }}

                            animate={{
                                opacity:1,
                                y:0
                            }}

                        >

                            📞 تماس با من

                        </motion.h1>






                        <motion.p

                            className="text-center text-secondary mb-5"

                            initial={{
                                opacity:0
                            }}

                            animate={{
                                opacity:1
                            }}

                            transition={{
                                delay:0.3
                            }}

                        >

                            اگر برای همکاری، استخدام، انجام پروژه یا
                            پرسش درباره برنامه‌نویسی نیاز به ارتباط دارید،
                            خوشحال می‌شوم پیام شما را دریافت کنم.

                        </motion.p>







                        {
                            contactItems.map((item,index)=>(


                                <motion.div

                                    key={index}

                                    className="mb-4 d-flex align-items-center"

                                    initial={{
                                        opacity:0,
                                        x:-50
                                    }}

                                    animate={{
                                        opacity:1,
                                        x:0
                                    }}

                                    transition={{
                                        delay:index * 0.2
                                    }}

                                    whileHover={{
                                        x:15,
                                        scale:1.03
                                    }}

                                >


                                    <span
                                        className={`${item.color} fs-3 me-3`}
                                    >

                                        {item.icon}

                                    </span>


                                    <div>

                                        <h5 className="mb-1 fw-bold">

                                            {item.title}

                                        </h5>


                                        <span>

                                            {item.text}

                                        </span>

                                    </div>



                                </motion.div>


                            ))
                        }








                        <motion.div

                            className="text-center mt-3"

                            whileHover={{
                                scale:1.1
                            }}

                            whileTap={{
                                scale:0.9
                            }}

                        >

                            <button

                                className="btn btn-primary px-5 py-2 rounded-pill"

                            >

                                ارسال پیام 🚀

                            </button>


                        </motion.div>





                    </motion.div>



                </div>


            </motion.div>


        </div>

    );

}