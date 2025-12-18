import React from 'react'
import About from './assets/components/About/About'
import Contact from './assets/components/Contact/Contact'
import Education from './assets/components/Education/Education'
import Experience from './assets/components/Experience/Experience'
import Footer from './assets/components/Footer/Footer'
import Navbar from './assets/components/Navbar/Navbar'
import Skills from './assets/components/Skills/Skills'
import Work from './assets/components/Work/Work'

const App = () => {
  return (
    <div className="bg-[#050414]">
      <p>Heloooooooooooooo</p>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>


    </div>
  )
}

export default App
