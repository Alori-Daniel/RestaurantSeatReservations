import { react } from 'react'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import ReserveTable from './components/ReserveTable/ReserveTable'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <div>
     <Navbar />
     <Hero />
     <Features/>
     <ReserveTable/>
     <Testimonials/>
    </div>
  )
}

export default App
