"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination,
    Autoplay,
    EffectCoverflow
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { motion } from "framer-motion";

import "./myproject.css";

import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/3.png";



export default function Mypro() {


    const projects = [
        {
            image: img1,
            title: "React",
            text: "در زمینه React فعالیت دارم و پروژه‌های مختلفی با استفاده از کامپوننت‌ها و رابط‌های کاربری مدرن ساخته‌ام."
        },

        {
            image: img2,
            title: "Next.js",
            text: "بیشترین فعالیت من در Next.js است و این پروژه نیز با استفاده از همین تکنولوژی ساخته شده است."
        },

        {
            image: img3,
            title: "Python",
            text: "در Python پروژه‌های مختلفی در زمینه بک‌اند و بخش‌های امنیتی انجام داده‌ام."
        }
    ];



    return (

        <motion.div

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


            <Swiper

                slidesPerView={1}

                spaceBetween={30}

                loop

                effect="coverflow"

                pagination={{
                    clickable:true
                }}

                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}

                modules={[
                    Pagination,
                    Autoplay,
                    EffectCoverflow
                ]}

                className="projectSwiper"


            >



                {
                    projects.map((project,index)=>(


                        <SwiperSlide key={index}>


                            <motion.h1

                                className="text-info text-center my-4"

                                initial={{
                                    opacity:0,
                                    y:-30
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                            >

                                🚀 حرفه های من

                            </motion.h1>





                            <motion.div

                                className="card"

                                whileHover={{
                                    scale:1.03
                                }}

                                transition={{
                                    duration:0.3
                                }}

                            >



                                <motion.div

                                    whileHover={{
                                        scale:1.1
                                    }}

                                    transition={{
                                        duration:0.5
                                    }}

                                >

                                    <Image

                                        src={project.image}

                                        alt={project.title}

                                        className="project-img"

                                    />

                                </motion.div>





                                <motion.div

                                    className="overlay text-danger"

                                    initial={{
                                        opacity:0,
                                        y:50
                                    }}

                                    whileInView={{
                                        opacity:1,
                                        y:0
                                    }}

                                    transition={{
                                        delay:0.3
                                    }}

                                >

                                    <h3>
                                        {project.title}
                                    </h3>


                                    <p>
                                        {project.text}
                                    </p>


                                </motion.div>




                            </motion.div>


                        </SwiperSlide>


                    ))
                }



            </Swiper>



        </motion.div>

    );
}