import React from 'react'
import Feature from './Feature'
import Explore from './Explore'
import Hero from './Hero'
import Testimonial from './Testimonial'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div>
     <Header/>
     <Hero/>
     <Explore/>
     <Feature/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}

export default Home