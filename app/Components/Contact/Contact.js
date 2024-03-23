import React from 'react'
import ContactImg from '../../assets/images/contact_us.png'

function Contact() {
    return (
        <div>
            <section id="contact" className="contact_area relative pt-18 pb-120">
                <div className="contact_image flex items-center justify-end">
                    <div className="image lg:pr-13">
                        <img src={ContactImg.src} alt="about" style={{width: "75%", height: "100%"}} />
                    </div>
                </div> 

                <div className="container">
                    <div className="row justify-end">
                        <div className="w-full lg:w-1/2">
                            <div className="contact_wrapper mt-11">
                                <div className="section_title pb-4">
                                    <h5 className="sub_title">اتصل بنا</h5>
                                    <h4 className="main_title">ابقى على تواصل معنا</h4>
                                    <p>نحن هنا لنستمع إليكم ونجيب على استفساراتكم، ونوفر الدعم اللازم لضمان أفضل تجربة ممكنة.</p>
                                </div> 

                                <div className="contact_form">
                                    <form id="contact-form" action="#" method="POST">
                                        <div className="row">
                                            <div className="w-full md:w-1/2">
                                                <div className="mx-3">
                                                    <div className="single_form mt-8">
                                                        <input name="name" id="name" type="text" placeholder="الاسم" className="w-full rounded-md py-4 px-6 border border-solid border-body-color" />
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <div className="mx-3">
                                                    <div className="single_form mt-8">
                                                        <input name="email" id="email" type="email" placeholder="البريد الالكتروني" className="w-full rounded-md py-4 px-6 border border-solid border-body-color" />
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="mx-3">
                                                    <div className="single_form mt-8">
                                                        <textarea name="message" id="message" placeholder="الرسالة" rows="5" className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"></textarea>
                                                    </div> 
                                                </div>
                                            </div>
                                            <p className="form-message mx-3"></p>
                                            <div className="w-full">
                                                <div className="mx-3">
                                                    <div className="single_form mt-8">
                                                        <button type="submit" className="main-btn contact-btn">ارسال</button>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div> 
                                    </form>
                                </div> 
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
        </div>
    )
}

export default Contact