import React from 'react'
import Shape1 from '../../assets/images/shape/shape-1.svg'
import Shape2 from '../../assets/images/shape/shape-2.svg'
import Shape3 from '../../assets/images/shape/shape-3.svg'
import Shape4 from '../../assets/images/shape/shape-4.svg'
import HeaderImg from '../../assets/images/hero.png'

function Hero() {
    return (
        <div>
            <section>
                <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
                    <div className="header_image flex items-center">
                        <div className="image 2xl:pl-25">
                            <img src={HeaderImg.src} alt="Header Image" />
                        </div>
                    </div>
                    <div className="header_shape hidden lg:block"></div>
                    <div className="container">
                        <div className="row">
                            <div className="w-full lg:w-1/2">
                                <div className="header_hero_content pt-150 lg:pt-0">
                                    <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">مؤسسة نوفاتك <span className="text-theme-color">للخدمات البرمجية</span></h2>
                                    <p className="mt-8 lg:mr-8">موقعنا الإلكتروني هو وجهتك الأمثل لجميع خدمات البرمجة التي تحتاجها لتحويل أفكارك إلى واقع ملموس.</p>
                                    <div className="hero_btn mt-10">
                                        <a className="main-btn" href="#0">ابدأ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero_shape shape_1">
                        <img src={Shape1.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_2">
                        <img src={Shape2.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_3">
                        <img src={Shape3.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_4">
                        <img src={Shape4.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_6">
                        <img src={Shape1.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_7">
                        <img src={Shape4.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_8">
                        <img src={Shape3.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_9">
                        <img src={Shape2.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_10">
                        <img src={Shape4.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_11">
                        <img src={Shape1.src} alt="shape" />
                    </div>
                    <div className="hero_shape shape_12">
                        <img src={Shape2.src} alt="shape" />
                    </div>

                    
                </div>
            </section>
        </div>
    )
}

export default Hero