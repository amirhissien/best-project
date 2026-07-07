"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./myproject.css"
import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/3.png";
import {brotliCompress} from "node:zlib";

export default function Mypro() {
    return (
        <Swiper

            slidesPerView={1}
            spaceBetween={30}
            loop
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="projectSwiper"
        >
            <SwiperSlide>
                <div className="my-3 text-center">
                    <h1 className="text-info ">
                        حرفه های من
                    </h1>
                </div>
                <div className="card">
                    <Image src={img1} alt="Project 1" className="project-img" />
                    <div className="overlay text-danger">
                        <h3>React</h3>
                        <p>من در حوضه ی ریکت فعالیت دارم پروژه های متعدد و زیاد</p>

                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="my-3 text-center">
                    <h1 className="text-info ">
                        حرفه های من
                    </h1>
                </div>
                <div className="card">
                    <Image src={img2} alt="Project 2" className="project-img" />
                    <div className="overlay text-danger">
                        <h3>Next.js</h3>
                        <p>در حوضه ی نکست بیشترین فعالیت رو دارم مثل این پروژه</p>

                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="my-3 text-center">
                    <h1 className="text-info ">
                        حرفه های من
                    </h1>
                </div>
                <div className="card">
                    <Image src={img3} alt="Project 3" className="project-img" />
                    <div className="overlay text-danger">
                        <h3>Python </h3>
                        <p>در پایتون پروژه های بسیار گرفتم که بخشی امنیتی و بخشی بک اند بوده</p>

                    </div>
                </div>
                <div className="my-5"></div>
            </SwiperSlide>
        </Swiper>

    );
}