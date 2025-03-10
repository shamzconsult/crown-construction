import React from 'react'
// import ServiceHero from './_components/ServiceHero'
import ServiceList from './_components/ServiceList'
import { CarouselPlugin } from './_components/CarousalHero'

function page() {
  return (
    <div>
        {/* <ServiceHero/> */}
        <CarouselPlugin/>
        <ServiceList/>
    </div>
  )
}

export default page