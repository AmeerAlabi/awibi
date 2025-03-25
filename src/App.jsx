import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ComingSoon from "./components/Coming";
import BlogDetails from "./components/BlogDetails";
import OurServices from "./components/OurServices";
import About from "./pages/About";
import Career from "./pages/Career";

// Lazy Loading Components
// const HeroSection = lazy(() => import("./components/Hero"));
// const Sponsors = lazy(() => import("./components/Sponsors"));
// const VisionMission = lazy(() => import("./components/Mission"));
// const Community = lazy(() => import("./components/Community"));
// const Services = lazy(() => import("./components/Services"));
// const TestimonialSection = lazy(() => import("./components/Testimonials"));
// const BlogSection = lazy(() => import("./components/Blog"));
// const Stats = lazy(() => import("./components/Stats"));
// const Team = lazy(() => import("./components/Team"));
// const FAQ = lazy(() => import("./components/Faq"));
// const Contact = lazy(() => import("./components/Contact")); // Contact Page
// const Careers = lazy(() => import("./components/Careers")); // Careers Page
// const NotFound = lazy(() => import("./components/NotFound")); // 404 Page

function App() {
  return (
    <>
      <Navbar />
      {/* <Suspense fallback={<div className="text-center py-10">Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/sponsors" element={<Sponsors />} /> */}
          <Route path="/mission" element={<ComingSoon />} />
          <Route path="/team" element={<ComingSoon/>} />
          <Route path="/careers" element={<Career/>} />
          {/* <Route path="/community" element={<Community />} /> */}
          <Route path="/services" element={<OurServices />} />
          {/* <Route path="/testimonials" element={<TestimonialSection />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* <Route path="/stats" element={<Stats />} /> */}
          {/* <Route path="/faq" element={<FAQ />} /> */}
          {/* <Route path="/careers" element={<ComingSoon />} /> */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      {/* </Suspense> */}
      <Footer />
      </>
  );
}

export default App;
