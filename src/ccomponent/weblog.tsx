"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import img7 from "src/public/7.png";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function Weblogs() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [status, setStatus] = useState("");

    const handleLike = () => {
        if (status === "like") return;

        if (status === "dislike") {
            setDislike(dislike - 1);
        }

        setLike(like + 1);
        setStatus("like");
    };

    const handleDislike = () => {
        if (status === "dislike") return;

        if (status === "like") {
            setLike(like - 1);
        }

        setDislike(dislike + 1);
        setStatus("dislike");
    };

    return (
        <div className="bord rounded-4 imgee text-center text-dark my-5 bg-dark-subtle p-4">
            <div className="text-center my-3">
                <h1>وبلاگ</h1>
            </div>

            <div className="web">
                <Image
                    src={img7}
                    alt="Blog"
                    className="img-fluid rounded-4 imgee"

                />
            </div>

            <div className="my-4">
                <h2>این خبر به شدت مهم است</h2>

                <p className="fs-5">
                   . ساخت این پروژه تنها در یک هفته به پایان رسیده است
                </p>
            </div>
            <div className="d-flex justify-content-center gap-3">
                <button
                    className={`btn ${
                        status === "like"
                            ? "btn-success"
                            : "btn-outline-success"
                    }`}
                    onClick={handleLike}
                >
                    <FaThumbsUp className="me-2" />
                    {like}
                </button>

                <button
                    className={`btn ${
                        status === "dislike"
                            ? "btn-danger"
                            : "btn-outline-danger"
                    }`}
                    onClick={handleDislike}
                >
                    <FaThumbsDown className="me-2" />
                    {dislike}
                </button>
            </div>
            <div className="text-center my-3">
                <a href="/weblog">
                    <button className="btn btn-lg btn-primary">
                        بیشتر...
                    </button>
                </a>
            </div>
        </div>

    );
}