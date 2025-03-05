import React from 'react'
import Hero from './_components/Hero'
import Introduction from './_components/Introduction'
import ServicesSection from './_components/ServicesSection'
import About from './_components/About'
import Project from './_components/Project'
import TeamSection from './_components/TeamSection'
import TestimonialSection from './_components/Testimonial'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Introduction/>
        <ServicesSection/>
        <About/>
        <Project/>
        <TeamSection/>
        <TestimonialSection/>
    </div>
  )
}

export default HomePage