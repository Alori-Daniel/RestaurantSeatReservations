import { react } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu';

function App() {

  return (
    <div>
      <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path='/menu' element={<Menu />}></Route>
     <Route path='/' element={
      <>
      <Hero />
      <AboutUs />
      </>
    }>
     </Route>
    
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  )
}


export default App
