import { useState } from 'react'
import FAQ from '../components/Faq'
import BlogSection from '../components/Blog'
import TestimonialSection from '../components/Testimonials'
import OverlaySection from '../components/Section'
import VisionMission from '../components/Mission'
import Sponsors from '../components/Sponsors'
import Services from '../components/Services'
import HeroSection from '../components/Hero'
import HealthcareSection from '../components/Section'
import AwibIEHR from '../components/Section'
import Hero from '../components/Section'
import Community from '../components/Community'
import Stats from '../components/Stats'
import Team from '../components/Team'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar /> */}
    <HeroSection />
    <Sponsors />
    <VisionMission />
    {/* <Community /> */}
    <Community />
    <Services />
    <Hero />
    <TestimonialSection />
    <BlogSection />
    <Stats />
  <Team />
    <FAQ />
    {/* <Footer /> */}
         </>
  )
}

export default Home
