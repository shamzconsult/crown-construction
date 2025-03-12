import React from 'react'
import HeroVideo from './_components/HeroVideo'
import Values from './_components/Values'
import Vision from './_components/Vision'
import LocationPage from './_components/LoacationPage'
import FounderProfile from './_components/FounderProfile'
import AudienceSection from './_components/Audience'

function page() {
  return (
    <div>
        <HeroVideo/>
        <Values/>
        <Vision/>
        <FounderProfile/>
        <AudienceSection/>
        <LocationPage/>
    </div>
  )
}

export default page