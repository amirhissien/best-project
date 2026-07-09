"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import img4 from "@/public/4.png";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Hero() {

    return (

        <section className="container position-relative overflow-hidden">


            {/* نور پس زمینه */}

            <motion.div

                className="position-absolute rounded-circle"

                style={{
                    width:"300px",
                    height:"300px",
                    background:"rgba(13,110,253,.25)",
                    filter:"blur(100px)",
                    top:"20%",
                    left:"10%"
                }}

                animate={{
                    scale:[1,1.3,1]
                }}

                transition={{
                    duration:5,
                    repeat:Infinity
                }}

            />





            <div className="row align-items-center min-vh-100">



                {/* Image */}

                <motion.div

                    className="col-lg-6 text-center"

                    initial={{
                        opacity:0,
                        x:-150
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:1
                    }}

                >



                    <motion.div

                        animate={{
                            y:[0,-20,0]
                        }}

                        transition={{
                            duration:4,
                            repeat:Infinity
                        }}

                    >

                        <Image

                            src={img4}

                            alt="Amirhossein Developer"

                            className="img-fluid rounded-5 shadow-lg"

                        />


                    </motion.div>


                </motion.div>







                {/* Text */}


                <motion.div

                    className="col-lg-6 text-white"

                    initial={{
                        opacity:0,
                        x:150
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:1
                    }}

                >




                    <motion.span

                        className="badge bg-primary rounded-pill px-4 py-2 mb-3"

                        initial={{
                            opacity:0
                        }}

                        animate={{
                            opacity:1
                        }}

                    >

                        🚀 Web Developer

                    </motion.span>







                    <motion.h1

                        className="display-3 fw-bold"

                        initial={{
                            opacity:0,
                            y:40
                        }}

                        animate={{
                            opacity:1,
                            y:0
                        }}

                        transition={{
                            delay:.3
                        }}

                    >

                        سلام، من

                        <br/>


                        <p className="text-danger">

                             امیرحسین بخشی

                        </p>

                        هستم



                    </motion.h1>







                    <motion.h3

                        className="mt-4 text-light"

                        initial={{
                            opacity:0,
                            y:40
                        }}

                        animate={{
                            opacity:1,
                            y:0
                        }}

                        transition={{
                            delay:.5
                        }}

                    >

                        توسعه‌دهنده وب علاقه‌مند به ساخت

                        <span className="text-info">
                            {" "}سایت‌های مدرن، سریع و زیبا
                        </span>

                        <br/>

                        با تجربه در React، Next.js و Python


                    </motion.h3>








                    <motion.div

                        className="mt-4 d-flex gap-3"

                        initial={{
                            opacity:0
                        }}

                        animate={{
                            opacity:1
                        }}

                        transition={{
                            delay:.8
                        }}

                    >


                        <Link href="/myproject">

                            <button className="btn btn-primary btn-lg rounded-pill px-4">

                                مشاهده پروژه‌ها 🚀

                            </button>

                        </Link>




                        <Link href="/call-me">

                            <button className="btn btn-outline-light btn-lg rounded-pill px-4">

                                تماس با من 📞

                            </button>

                        </Link>



                    </motion.div>









                    <motion.div

                        className="mt-5"

                        initial={{
                            opacity:0
                        }}

                        animate={{
                            opacity:1
                        }}

                        transition={{
                            delay:1
                        }}

                    >


                        <h5>

                            💻 تکنولوژی‌هایی که استفاده می‌کنم

                        </h5>



                        <div className="d-flex gap-4 mt-4">


                            <motion.a

                                href="https://nextjs.org/"

                                whileHover={{
                                    scale:1.3,
                                    rotate:15
                                }}

                            >

                                <RiNextjsFill size={60}/>

                            </motion.a>





                            <motion.a

                                href="https://react.dev/"

                                whileHover={{
                                    scale:1.3,
                                    rotate:-15
                                }}

                            >

                                <FaReact size={60}/>

                            </motion.a>






                            <motion.a

                                href="https://www.python.org/"

                                whileHover={{
                                    scale:1.3,
                                    rotate:15
                                }}

                            >

                                <FaPython size={60}/>

                            </motion.a>



                        </div>


                    </motion.div>



                </motion.div>



            </div>



        </section>

    );
}