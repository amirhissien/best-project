import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Call() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">

                    <div className="card border-0 shadow-lg rounded-5 p-5">

                        <h1 className="text-center fw-bold mb-3">
                            📞 تماس با من
                        </h1>

                        <p className="text-center text-secondary mb-5">
                            اگر برای همکاری، استخدام، انجام پروژه یا هرگونه پرسش درباره
                            برنامه‌نویسی نیاز به ارتباط با من دارید، خوشحال می‌شوم پیام شما
                            را دریافت کنم.
                        </p>

                        <div className="mb-4 d-flex align-items-center">
                            <FaPhoneAlt className="text-primary fs-4 me-3" />
                            <span>09308471049</span>
                        </div>

                        <div className="mb-4 d-flex align-items-center">
                            <FaEnvelope className="text-danger fs-4 me-3" />
                            <span>amirhosseinus@gmail.com</span>
                        </div>

                        <div className="mb-4 d-flex align-items-center">
                            <FaGithub className="text-dark fs-4 me-3" />
                            <span>https://github.com/amirhissien</span>
                        </div>

                        <div className="mb-5 d-flex align-items-center">
                            <FaMapMarkerAlt className="text-success fs-4 me-3" />
                            <span>ایران</span>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary px-5 py-2 rounded-pill">
                                ارسال پیام
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}