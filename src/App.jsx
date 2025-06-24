import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import backg from './assets/bg9.jpg'
import { motion } from "motion/react"
import Footer from './components/Footer'



function App() {

const bg = {
  backgroundImage: `url(${backg})`
}
  return (
    <>
    
    <div className="helo bg-center bg-cover bg-no-repeat w-screen h-screen" style={bg}>
      <motion.div className="navv"
      initial={{
        y: -100
      }}
      animate={{
        y:0,
      }}
      transition={{
        delay: 0.2,
      }}
      >
    <Navbar/>
    </motion.div>
    <Home/>
    </div>
    <Footer/>
    </>



  )
}

export default App


