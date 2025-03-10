import React from 'react'
import HeroVideo from './_components/HeroVideo'
import Values from './_components/Values'
import Vision from './_components/Vision'
import LocationPage from './_components/LoacationPage'
import TeamSection from './_components/TeamSection'

function page() {
  return (
    <div>
        <HeroVideo/>
        <Values/>
        <Vision/>
        <TeamSection/>
        <LocationPage/>
    </div>
  )
}

export default page