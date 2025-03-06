import React from 'react'
import HeroVideo from './_components/HeroVideo'
import Values from './_components/Values'
import Vision from './_components/Vision'
import TeamSection from '../Home/_components/TeamSection'
import LocationPage from './_components/LoacationPage'

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