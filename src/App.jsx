import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero.jsx'
import Sponsor from './components/Sponsor/Sponsor'



const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Sponsor />
    </>
  )
}

export default App