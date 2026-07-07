import "bootstrap/dist/css/bootstrap.min.css";

export default function Aboutus() {
    return (
        <div className="container my-5">
            <h1 className="text-center text-white mb-5">درباره من </h1>

            <div className="row g-4">

                {/* کارت اول */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow text-center">
                        <div className="card-body">
                            <h2 className="text-danger fw-bold">پدر و مادر</h2>
                            <p className="mt-3">
                                در آخر باید از پدر و مادرم تشکر کنم که اگر نبودند
                                نمی‌توانستم این پروژه را درست کنم.
                            </p>
                        </div>
                    </div>
                </div>

                {/* کارت دوم */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow text-center">
                        <div className="card-body">
                            <h2 className="fw-bold text-danger">سال شروع</h2>
                            <p className="mt-3 ">
                                من در سال ۱۴۰۲ در آموزشگاه نیکوروش شروع به یادگیری
                                برنامه‌نویسی کردم.
                            </p>
                        </div>
                    </div>
                </div>

                {/* کارت سوم */}
                <div className="col-lg-4 col-md-12">
                    <div className="card h-100 shadow text-center">
                        <div className="card-body">
                            <h2 className="fw-bold text-danger">نشان راه من</h2>
                            <p className="mt-3 ">
                              ...باید از اینجا تشکر کنم از معلم کامپیوترم آقای
                                <br/>
                                و معلم ریاضی من آقای واحدزاده
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}