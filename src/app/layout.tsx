import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./ChatGPT Image Jul 2, 2026, 10_20_25 PM.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export const metadata: Metadata = {
    title: "Amirhossein Portfolio",
    description: "Frontend Developer Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa" >
        <body className="bg-black">

        {/* Bootstrap JS */}
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            strategy="afterInteractive"
        />

        {/* Custom JS */}
        <Script id="custom-script" strategy="afterInteractive">
            {`
            function userScroll() {
              const navbar = document.querySelector('.navbar');
              const toTopBtn = document.querySelector('#to-top');

              window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                  navbar?.classList.add('navbar-sticky');

                  if(toTopBtn){
                    toTopBtn.classList.add('show');
                  }
                } else {
                  navbar?.classList.remove('navbar-sticky');

                  if(toTopBtn){
                    toTopBtn.classList.remove('show');
                  }
                }
              });
            }

            function scrollToTop() {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }

            function incrementStats() {
              const counters = document.querySelectorAll('.counter');

              counters.forEach(function (counter) {
                counter.innerText = 0;

                const updateCounter = function () {
                  const target = +counter.getAttribute('data-target');
                  const c = +counter.innerText;

                  const increment = target / 200;

                  if (c < target) {
                    counter.innerText = Math.ceil(c + increment);
                    setTimeout(updateCounter, 10);
                  } else {
                    counter.innerText = target;
                  }
                }

                updateCounter();
              });
            }

            document.addEventListener('DOMContentLoaded', userScroll);
            document.addEventListener('DOMContentLoaded', incrementStats);

            document.addEventListener('DOMContentLoaded', function() {
              const btn = document.querySelector('#to-top');

              if(btn){
                btn.addEventListener('click', scrollToTop);
              }
            });
           const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
};
          `}
        </Script>

      <div className="container">
          <nav className="navbar navbar-expand-lg sticky-top text-dark">
              <>
                  <a href="">
                      <Image
                          src={logo}
                          alt="Amirhossein Developer"
                          width={70}
                          height={70}
                          className="navbar-logo"
                      />
                  </a>

              </>
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
                      <ul className="navbar-nav ms-auto mt-auto ">
                          <li className="nav-item rounded-3 bg-white">
                              <a className="nav-link" href="#" >
                                  خانه
                              </a>
                          </li>

                          <li className="nav-item rounded-3 bg-white">
                              <a className="nav-link" href="#">
                                  درباره ی من
                              </a>
                          </li>

                          <li className="nav-item rounded-3 bg-white">
                              <a className="nav-link" href="#">
                                  پروژه های من
                              </a>
                          </li>
                          <li className="nav-item rounded-3 bg-white">
                              <a className="nav-link" href="#">
                                  وبلاگ
                              </a>
                          </li>

                          <li className="nav-item rounded-3 bg-white">
                              <a className="nav-link" href="#">
                                  تماس با من
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>

        {children}

        {/* To Top Button */}
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
                        <form className="p-4 bg-dark rounded-4 shadow">
                            <h3 className="mb-4 text-white">انتقادات و پیشنهادات</h3>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">
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
                                <label htmlFor="message" className="form-label text-white">
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
        </body>
        </html>
    );
}