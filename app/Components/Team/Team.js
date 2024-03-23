import React from 'react'
import Team1 from '../../assets/images/team1.png'
import Team3 from '../../assets/images/team3.png'
import Team5 from '../../assets/images/team5.png'
import Team2 from '../../assets/images/team2.png'

function Team() {
    return (
        <div>
            <section id="team" className="team_area bg-gray pt-120 pb-120">
                <div className="container">
                    <div className="row justify-center">
                        <div className="w-full lg:w-1/2">
                            <div className="section_title text-center pb-6">
                                <h5 className="sub_title">فريق العمل</h5>
                                <h4 className="main_title">تعرف على أعضاء فريقنا</h4>
                            </div>
                        </div>
                    </div>
                    <div className="team-wrapper relative">
                        <div className="row team_active">
                            <div className="w-full lg:w-4/12">
                                <div className="single_team_item mx-auto">
                                    <div className="single_team mx-3">
                                        <div className="team_image relative">
                                            <img src={Team1.src} alt="team" className="w-full" />
                                                <ul className="social absolute top-4 right-8">
                                                    <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                                </ul>
                                        </div>
                                        <div className="team_content py-5 px-8 relative">
                                            <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">جمانه عبدالوهاب</a></h4>
                                            <p className="mt-2 transition-all duration-300 group-hover:text-white">Founder and CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12">
                                <div className="single_team_item mx-auto">
                                    <div className="single_team mx-3">
                                        <div className="team_image relative">
                                            <img src={Team3.src} alt="team" className="w-full" />
                                                <ul className="social absolute top-4 right-8">
                                                    <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                                </ul>
                                        </div>
                                        <div className="team_content py-5 px-8 relative">
                                            <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">فاطمه</a></h4>
                                            <p className="mt-2 transition-all duration-300 group-hover:text-white">UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12">
                                <div className="single_team_item mx-auto">
                                    <div className="single_team mx-3">
                                        <div className="team_image relative">
                                            <img src={Team5.src} alt="team" className="w-full" />
                                                <ul className="social absolute top-4 right-8">
                                                    <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                                </ul>
                                        </div>
                                        <div className="team_content py-5 px-8 relative">
                                            <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">راشد شراحيلي</a></h4>
                                            <p className="mt-2 transition-all duration-300 group-hover:text-white">Product Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12">
                                <div className="single_team_item mx-auto">
                                    <div className="single_team mx-3">
                                        <div className="team_image relative">
                                            <img src={Team2.src} alt="team" className="w-full" />
                                                <ul className="social absolute top-4 right-8">
                                                    <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                                    <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                                </ul>
                                        </div>
                                        <div className="team_content py-5 px-8 relative">
                                            <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">أسماء الخالدي</a></h4>
                                            <p className="mt-2 transition-all duration-300 group-hover:text-white">Business Development Manager</p>
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

export default Team