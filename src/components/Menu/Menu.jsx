import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'
import MenuHero from './MenuHero/MenuHero'
// import Items from './Delicacy/Items'
import Starters from './Delicacy/Starters'
import MainCourses from './Delicacy/MainCourses'
import Vegetarian from './Delicacy/Vegetarian'
import Specialities from './Delicacy/Specialities'
import Dessert from './Delicacy/Dessert'
import Beverage from './Delicacy/Beverage'

const Menu = () => {
  return (
    <div>
      <MenuHero />
      <Starters />
      <MainCourses />
      <Vegetarian />
      <Specialities />
      <Dessert />
      <Beverage />
    </div>
  )
}

export default Menu
