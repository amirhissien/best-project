import {FaGithub, FaPhoneAlt} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

export default function Footer () {
    return (
    <>
        <button
            id="to-top"
            className="btn btn-primary position-fixed"
            style={{
                bottom: "20px",
                right: "20px",
                display: "none"
            }}
        >
            ↑
        </button>
        <footer className="bg-dark-subtle bg-opacity-25 py-5">
            <div className="container">
                <div className="row align-items-start">

                    {/* Contact Section */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h2 className="mb-4">ارتباط با من</h2>

                        <div className="d-flex align-items-center mb-4">
                            <FaPhoneAlt size={35} />
                            <a
                                className="h4 text-info text-decoration-none ms-3"
                                href="tel:+989308471049"
                            >
                                09308471049
                            </a>
                        </div>

                        <div className="d-flex align-items-center mb-4">
                            <FaGithub size={35} />
                            <a
                                className="h4 text-info text-decoration-none ms-3"
                                href="https://github.com/amirhissien"
                                target="_blank"
                            >
                                github.com/amirhissien
                            </a>
                        </div>

                        <div className="d-flex align-items-center">
                            <SiGmail size={35} />
                            <a
                                className="h4 text-info text-decoration-none ms-3"
                                href="mailto:amirhosseinus@gmail.com"
                            >
                                amirhosseinus@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="col-lg-6">
                        <form className="p-4  rounded-4 shadow">
                            <h3 className="mb-4 text-dark">انتقادات و پیشنهادات</h3>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-dark">
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
                                <label htmlFor="message" className="form-label text-dark">
                                    Message
                                </label>

                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows={5}
                                    placeholder="Write your message..."
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100" id="btnclick">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    </>
    )
}