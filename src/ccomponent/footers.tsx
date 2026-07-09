"use client";

import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <>
            <motion.button
                id="to-top"
                className="btn btn-primary position-fixed"
                style={{
                    bottom: "20px",
                    right: "20px",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{
                    scale: 1.2,
                    rotate: 360
                }}
            >
                ↑
            </motion.button>


            <footer className="bg-dark-subtle bg-opacity-25 py-5">

                <div className="container">

                    <div className="row align-items-start">


                        {/* Contact Section */}

                        <motion.div
                            className="col-lg-6 mb-5 mb-lg-0"
                            initial={{
                                opacity: 0,
                                x: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.8
                            }}
                        >

                            <h2 className="mb-4">
                                ارتباط با من
                            </h2>


                            <motion.div
                                className="d-flex align-items-center mb-4"
                                whileHover={{
                                    x: 15
                                }}
                            >
                                <FaPhoneAlt size={35}/>

                                <a
                                    className="h4 text-info text-decoration-none ms-3"
                                    href="tel:+989308471049"
                                >
                                    09308471049
                                </a>

                            </motion.div>



                            <motion.div
                                className="d-flex align-items-center mb-4"
                                whileHover={{
                                    x: 15
                                }}
                            >

                                <FaGithub size={35}/>

                                <a
                                    className="h4 text-info text-decoration-none ms-3"
                                    href="https://github.com/amirhissien"
                                    target="_blank"
                                >
                                    github.com/amirhissien
                                </a>

                            </motion.div>




                            <motion.div
                                className="d-flex align-items-center"
                                whileHover={{
                                    x: 15
                                }}
                            >

                                <SiGmail size={35}/>

                                <a
                                    className="h4 text-info text-decoration-none ms-3"
                                    href="mailto:amirhosseinus@gmail.com"
                                >
                                    amirhosseinus@gmail.com
                                </a>

                            </motion.div>


                        </motion.div>




                        {/* Form Section */}


                        <motion.div
                            className="col-lg-6"
                            initial={{
                                opacity: 0,
                                x: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.8
                            }}
                        >


                            <motion.form
                                className="p-4 rounded-4 shadow"
                                whileHover={{
                                    scale: 1.02
                                }}
                            >


                                <h3 className="mb-4 text-dark">
                                    انتقادات و پیشنهادات
                                </h3>



                                <div className="mb-3">

                                    <label
                                        htmlFor="email"
                                        className="form-label text-dark"
                                    >
                                        Email
                                    </label>


                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                    />

                                </div>



                                <div className="mb-3">

                                    <label
                                        htmlFor="message"
                                        className="form-label text-dark"
                                    >
                                        Message
                                    </label>


                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows={5}
                                        placeholder="Write your message..."
                                    />

                                </div>




                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    id="btnclick"
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    whileTap={{
                                        scale: 0.95
                                    }}
                                >
                                    Submit
                                </motion.button>


                            </motion.form>


                        </motion.div>


                    </div>

                </div>

            </footer>
        </>
    );
}