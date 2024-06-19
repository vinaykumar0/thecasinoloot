import React from 'react'
import Hero from './Hero/Hero'
import HeroUppr from './Hero/HeroUppr'
import Section from './Section1/Section'
import Featured from './Featured/Featured'
import Country from './Country/Country'
import Blog from './Blog/Blog'
import Data from './Country/Data'
import Testi from '../Testimonial/Testimonial/Testi'

const Home = () => {
  return (
      <div>
          <Hero />
      <HeroUppr />
      <Section />
      <Featured />
      {/* <Section /> */}
      <Country />
      {/* <Data/> */}
      <Blog/>
      <Testi/>
    </div>
  )
}

export default Home