import React from 'react'
import Hero from './_components/Hero'
import Introduction from './_components/Introduction'
import ServicesSection from './_components/ServicesSection'
import About from './_components/About'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Introduction/>
        <ServicesSection/>
        <About/>
    </div>
  )
}

export default HomePage