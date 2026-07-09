"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import img7 from "@/public/7.png";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Weblog() {

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [status, setStatus] = useState("");



    const handleLike = () => {

        if(status === "like") return;

        if(status === "dislike"){
            setDislike(dislike - 1);
        }

        setLike(like + 1);
        setStatus("like");

    };



    const handleDislike = () => {

        if(status === "dislike") return;

        if(status === "like"){
            setLike(like - 1);
        }

        setDislike(dislike + 1);
        setStatus("dislike");

    };



    return (

        <motion.div

            className="bord rounded-4 imgee text-center text-dark my-5 bg-dark-subtle p-4"

            initial={{
                opacity:0,
                y:80,
                scale:0.9
            }}

            whileInView={{
                opacity:1,
                y:0,
                scale:1
            }}

            viewport={{
                once:true
            }}

            transition={{
                duration:0.8
            }}

            whileHover={{
                y:-10,
                scale:1.02
            }}

        >




            <motion.div

                className="text-center my-3"

                initial={{
                    opacity:0,
                    y:-30
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    delay:0.3
                }}

            >

                <h1>
                    📰 وبلاگ
                </h1>

            </motion.div>






            <motion.div

                className="web overflow-hidden rounded-4"

                initial={{
                    opacity:0,
                    scale:0.7
                }}

                whileInView={{
                    opacity:1,
                    scale:1
                }}

                transition={{
                    duration:0.8
                }}

            >

                <motion.div

                    whileHover={{
                        scale:1.08
                    }}

                    transition={{
                        duration:0.5
                    }}

                >

                    <Image

                        src={img7}

                        alt="Blog"

                        className="img-fluid rounded-4 imgee"

                    />

                </motion.div>


            </motion.div>







            <motion.div

                className="my-4"

                initial={{
                    opacity:0,
                    y:40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    delay:0.5
                }}

            >


                <h2 className="fw-bold">
                    اولین تجربه من در ساخت پروژه
                </h2>


                <p className="fs-5">

                    این پروژه نتیجه تلاش و یادگیری مداوم من در
                    مسیر برنامه‌نویسی است که در مدت یک هفته
                    طراحی و توسعه داده شد.

                </p>


            </motion.div>








            <div className="d-flex justify-content-center gap-3">


                <motion.button

                    className={`btn ${
                        status === "like"
                            ? "btn-success"
                            : "btn-outline-success"
                    }`}

                    onClick={handleLike}

                    whileHover={{
                        scale:1.15
                    }}

                    whileTap={{
                        scale:0.8
                    }}

                >

                    <FaThumbsUp className="me-2"/>

                    {like}

                </motion.button>







                <motion.button

                    className={`btn ${
                        status === "dislike"
                            ? "btn-danger"
                            : "btn-outline-danger"
                    }`}

                    onClick={handleDislike}

                    whileHover={{
                        scale:1.15
                    }}

                    whileTap={{
                        scale:0.8
                    }}

                >

                    <FaThumbsDown className="me-2"/>

                    {dislike}

                </motion.button>



            </div>





        </motion.div>

    );
}