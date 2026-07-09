"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaHeart, FaCode, FaUserGraduate } from "react-icons/fa";


export default function Aboutus() {


    const cards = [

        {
            icon:<FaHeart />,
            title:"حمایت خانواده",
            text:
                "بخش بزرگی از مسیر موفقیت من مدیون حمایت و همراهی پدر و مادرم است که همیشه انگیزه ادامه دادن را به من داده‌اند."
        },


        {
            icon:<FaCode />,
            title:"شروع برنامه‌نویسی",
            text:
                "در سال ۱۴۰۲ یادگیری برنامه‌نویسی را در آموزشگاه نیکوروش شروع کردم و از همان ابتدا به ساخت پروژه‌های واقعی علاقه‌مند شدم."
        },


        {
            icon:<FaUserGraduate />,
            title:"افراد تاثیرگذار",
            text:
                <>
                    از استادان و معلمانی که در مسیر یادگیری من تاثیر داشتند،
                    مخصوصاً آقای شیرمحمد و آقای واحدزاده تشکر می‌کنم.
                </>
        }

    ];





    return (

        <section className="container my-5">



            {/* Title */}

            <motion.div

                className="text-center mb-5"

                initial={{
                    opacity:0,
                    y:-50
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                viewport={{
                    once:true
                }}

                transition={{
                    duration:.8
                }}

            >

                <h1 className="text-white display-4 fw-bold">

                    درباره <span className="text-danger">من</span>

                </h1>


                <p className="text-white-50 fs-5">

                    داستان مسیر من از یادگیری تا ساخت پروژه‌های واقعی 🚀

                </p>


            </motion.div>








            <div className="row g-4">


                {
                    cards.map((card,index)=>(


                        <motion.div

                            key={index}

                            className="col-lg-4 col-md-6"


                            initial={{

                                opacity:0,

                                y:100

                            }}


                            whileInView={{

                                opacity:1,

                                y:0

                            }}


                            viewport={{

                                once:true

                            }}


                            transition={{

                                duration:.8,

                                delay:index*.2

                            }}

                        >




                            <motion.div


                                className="card about-card h-100 border-0 text-center p-4"


                                whileHover={{

                                    y:-15,

                                    scale:1.05,

                                    rotateX:5

                                }}


                                transition={{

                                    type:"spring",

                                    stiffness:250

                                }}


                            >



                                {/* Icon */}


                                <motion.div


                                    className="about-icon mx-auto mb-4"


                                    whileHover={{

                                        rotate:360

                                    }}


                                    transition={{

                                        duration:.8

                                    }}

                                >

                                    {card.icon}


                                </motion.div>







                                <h2 className="text-danger fw-bold">

                                    {card.title}

                                </h2>




                                <p className="mt-3 text-dark fs-5">

                                    {card.text}

                                </p>



                            </motion.div>



                        </motion.div>



                    ))

                }


            </div>




        </section>

    );

}