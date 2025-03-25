import React from 'react'
import ComingSoon from '../components/Coming'
import abt from '../assets/Images/abt-us.png'
import OurMission from '../components/OurMission'
import OurStory from '../components/OurStory'
import WhatSetsUsApart from '../components/WhatSetsUpApart'
import Team from '../components/Team'
import Sponsors from '../components/Sponsors'
import Stats from '../components/Stats'
import OurJourney from '../components/OurJourney'

const About = () => {
  return (
    <div>
        <img src={abt} alt="" className="  w-full" />
        {/* <ComingSoon /> */}
      <OurMission />
      <OurStory />
      <WhatSetsUsApart />
      <Team />
      <Sponsors />
      <Stats />
      <OurJourney />
    </div>
  )
}

export default About
