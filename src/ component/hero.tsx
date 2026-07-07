import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import img4 from "@/public/4.png";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
export default function Hero() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                    <Image
                        src={img4}
                        alt="Project 1"
                        className="imge my-3 rounded-5 img-fluid"
                    />
                </div>

                <div className="col-lg-6 text-white">
                    <p className="par">. سلام من</p>
                    <h1 className="h121">
                     <div className="d-inline text-danger mx-2">بخشی</div>امیرحسین
                    </h1>
                    <h3 className="h131 my-">
                    من 16 سالم هستش تقریبا 2 سال هست برنامه نویسی رو به صورت حرفه کار می کنم
                    </h3>
                    <div className="icons text-center">
                        <h4>  👇👇👇 زبان هایی که کار می کنم به شرح زیر هست 👇👇👇</h4>
                        <br/>
                        <br/>
                        <a  className="ic"  href="https://nextjs.org/">
                            <RiNextjsFill className="mx-3 "  size={60} />
                        </a>
                        <a className="ic" href="https://react.dev/">
                            <FaReact className="mx-3 " size={60} />
                        </a>
                        <a  className="ic" href="https://www.python.org/">
                            <FaPython className="mx-3 " size={60} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}