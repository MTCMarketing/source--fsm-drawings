import * as React from "react"
import Header from "../components/header/nav"
import AboutSection from "../components/about/about"
import HeroSection from "../components/hero/hero"
import ServicesSection from "../components/services/services"
import ProjectsSection from "../components/portfolio/portfolio"
import Footer from "../components/footer/footer"
import TestimonialsSection from "../components/testimonials/testimonials"
import FAQSection from "../components/faqs/faq"






const IndexPage = () => {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <ProjectsSection/>
      <FAQSection/>
      <TestimonialsSection/>
      <Footer/>
    </main>
  )
}

export default IndexPage

