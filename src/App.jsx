import  React  from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import ReserveTable from './components/ReserveTable/ReserveTable'
import Testimonials from './components/Testimonials/Testimonials'

import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu';
import BookTable from './components/BookTable/BookTable';
import AboutUsInfo from './components/AboutUsInfo/AboutUsInfo';
import Banner from './components/AboutUsInfo/Banner/Banner';
import Carousel from './components/AboutUsInfo/Carousel/Carousel';


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
     <Features/>
     <AboutUs />
     <ReserveTable/>
     <Testimonials/>
    
      </>
    }>
     </Route>
     <Route path='/book' element={<BookTable />}></Route>
    <Route path='/aboutusinfo' element={<AboutUsInfo/>} ></Route> 
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  )
}


export default App
