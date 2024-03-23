import React from 'react'
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import AboutServices from '../AboutServices/AboutServices'
import Why from '../Why/Why'
import Services from '../Services/Services'
import Work from '../Work/Work'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'

function HomePage() {
  return (
    <div>
        <Preloader />
        <Header />
        <Hero />
        <AboutServices />
        {/* <Why /> */}
        <Services />
        <Work />
        <Team />
        <Contact />
    </div>
  )
}

export default HomePage