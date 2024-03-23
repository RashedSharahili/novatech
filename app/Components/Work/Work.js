import React from 'react'
import Work1 from '../../assets/images/work-1.jpg'
import Work2 from '../../assets/images/work-2.jpg'
import Work3 from '../../assets/images/work-3.jpg'
import Work4 from '../../assets/images/work-4.jpg'
import Work5 from '../../assets/images/work-5.jpg'

function Work() {
    return (
        <div>
            <section id="work" className="work_area bg-gray pt-120 pb-120">
                <div className="container">
                    <div className="row justify-center">
                        <div className="w-ull lg:w-1/2">
                            <div className="section_title text-center pb-6">
                                <h5 className="sub_title">مشاريعنا</h5>
                                <h4 className="main_title">بعض من أعمالنا الأخيرة</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="work_wrapper relative">
                        <div className="row work_active">
                            <div className="w-full lg:w-3/12">
                                <div className="single_item mx-auto">
                                    <div className="single_work mx-3">
                                        <div className="work_image">
                                            <img src={Work1.src} alt="work" className="w-full" />
                                        </div>
                                        <div className="work_content">
                                            <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                            <h4 className="work_title text-xl md:text-2xl"><a href="#">التسويق</a></h4>
                                            <p className="mt-2">NoCodeAPI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12">
                                <div className="single_item mx-auto">
                                    <div className="single_work mx-3">
                                        <div className="work_image">
                                            <img src={Work2.src} alt="work" className="w-full" />
                                        </div>
                                        <div className="work_content">
                                            <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                            <h4 className="work_title text-xl md:text-2xl"><a href="#">التصميم الابداعي</a></h4>
                                            <p className="mt-2">UIdeck</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12">
                                <div className="single_item mx-auto">
                                    <div className="single_work mx-3">
                                        <div className="work_image">
                                            <img src={Work3.src} alt="work" className="w-full" />
                                        </div>
                                        <div className="work_content">
                                            <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                            <h4 className="work_title text-xl md:text-2xl"><a href="#">تصميم الويب</a></h4>
                                            <p className="mt-2">GrayGrids</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12">
                                <div className="single_item mx-auto">
                                    <div className="single_work mx-3">
                                        <div className="work_image">
                                            <img src={Work4.src} alt="work" className="w-full" />
                                        </div>
                                        <div className="work_content">
                                            <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                            <h4 className="work_title text-xl md:text-2xl"><a href="#">التحليل</a></h4>
                                            <p className="mt-2">Ayro UI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-3/12">
                                <div className="single_item mx-auto">
                                    <div className="single_work mx-3">
                                        <div className="work_image">
                                            <img src={Work5.src} alt="work" className="w-full" />
                                        </div>
                                        <div className="work_content">
                                            <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                            <h4 className="work_title text-xl md:text-2xl"><a href="#">SMM</a></h4>
                                            <p className="mt-2">LineIcons</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="w-full lg:w-3/12">
                                <div className="single_item mx-auto">
                                    <div className="single_work mx-3">
                                        <div className="work_image">
                                            <img src={Work2.src} alt="work" className="w-full" />
                                        </div>
                                        <div className="work_content">
                                            <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                            <h4 className="work_title text-xl md:text-2xl"><a href="#">تحسين محركات البحث</a></h4>
                                            <p className="mt-2">PageBulb</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12">
                                <div className="single_item mx-auto">
                                    <div className="single_work mx-3">
                                        <div className="work_image">
                                            <img src={Work4.src} alt="work" className="w-full" />
                                        </div>
                                        <div className="work_content">
                                            <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                            <h4 className="work_title text-xl md:text-2xl"><a href="#">تطبيقات الموبايل</a></h4>
                                            <p className="mt-2">Rocket Internet LTD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work