import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQ from './components/Faq'
import BlogSection from './components/Blog'
import TestimonialSection from './components/Testimonials'
import OverlaySection from './components/Section'
import VisionMission from './components/Mission'
import Sponsors from './components/Sponsors'
import Services from './components/Services'
import HeroSection from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HeroSection />
    <Services />
    <Sponsors />
    <VisionMission />
    <OverlaySection />
    <TestimonialSection />
    <BlogSection />
    <FAQ />
    <Footer />
         </>
  )
}

export default App
