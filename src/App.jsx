import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQ from './components/Faq'
import BlogSection from './components/Blog'
import TestimonialSection from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <TestimonialSection />
    <BlogSection />
    <FAQ />
    <Footer />
         </>
  )
}

export default App
