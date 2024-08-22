import { react } from 'react'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'

function App() {

  return (
    <div>
     <Navbar />
     <Hero />
     <AboutUs />
    </div>
  )
}

export default App
