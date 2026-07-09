"use client";

import { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "src/app/ChatGPT Image Jul 2, 2026, 10_20_25 PM.png";

export default function Nav() {

    useEffect(() => {

        const navbar = document.querySelector(".navbar");
        const toTopBtn = document.querySelector<HTMLElement>("#to-top");


        const userScroll = () => {

            if (window.scrollY > 50) {
                navbar?.classList.add("navbar-sticky");
                toTopBtn?.classList.add("show");
            }
            else {
                navbar?.classList.remove("navbar-sticky");
                toTopBtn?.classList.remove("show");
            }

        };


        window.addEventListener("scroll", userScroll);


        const scrollToTop = () => {
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        };


        if(toTopBtn){
            toTopBtn.addEventListener(
                "click",
                scrollToTop
            );
        }



        return () => {

            window.removeEventListener(
                "scroll",
                userScroll
            );

            if(toTopBtn){
                toTopBtn.removeEventListener(
                    "click",
                    scrollToTop
                );
            }

        };


    }, []);



    const menuItems = [
        {
            title:"خانه",
            link:"/"
        },
        {
            title:"حرفه های من",
            link:"/myproject"
        },
        {
            title:"وبلاگ",
            link:"/weblog"
        },
        {
            title:"تماس با من",
            link:"/call-me"
        }
    ];



    return (
        <>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />


            <div className="container">


                <motion.nav
                    className="navbar navbar-expand-lg sticky-top text-dark"
                    initial={{
                        opacity:0,
                        y:-80
                    }}
                    animate={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        duration:0.8
                    }}
                >


                    <motion.div
                        whileHover={{
                            scale:1.1,
                            rotate:10
                        }}
                        transition={{
                            type:"spring"
                        }}
                    >

                        <Link
                            href="/"
                            className="navbar-brand"
                        >

                            <Image
                                src={logo}
                                alt="Amirhossein Developer"
                                width={70}
                                height={70}
                                className="navbar-logo"
                            />

                        </Link>

                    </motion.div>




                    <div className="container nav-height">


                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >

                            <span className="navbar-toggler-icon"></span>

                        </button>



                        <div
                            className="collapse navbar-collapse rounded-3"
                            id="navbarNav"
                        >


                            <ul className="navbar-nav ms-auto mt-auto">


                                {
                                    menuItems.map((item,index)=>(

                                        <motion.li
                                            key={index}
                                            className="nav-item rounded-3 bg-white mx-1"
                                            initial={{
                                                opacity:0,
                                                y:-30
                                            }}
                                            animate={{
                                                opacity:1,
                                                y:0
                                            }}
                                            transition={{
                                                delay:index * 0.15
                                            }}

                                            whileHover={{
                                                scale:1.1,
                                                y:-5
                                            }}

                                        >

                                            <Link
                                                href={item.link}
                                                className="nav-link m-auto px-3"
                                            >

                                                {item.title}

                                            </Link>


                                        </motion.li>

                                    ))

                                }


                            </ul>


                        </div>


                    </div>



                </motion.nav>


            </div>


        </>
    );
}