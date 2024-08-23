import React from 'react'
import meals from '../../../assets/meals'
import Items from './Items'
import './item.css'

const MainCourses = () => {
  return (
    <div  className='starters courses'>
        <div className='stat'>
        <div className='starter-text'  >
            <p style={{color:"black"}}>Main Courses</p>
            {/* <p>Starters</p> */}
            <p style={{color:"black"}}>Savor the heart of our menu with these authentic and hearty African dishes</p>
        </div>
        <div className='starter-div black-starter' >
      {meals.map((prod,i)=>{
        if (prod.category === "courses"){
            return<Items key={i} img={prod.image} name={prod.name} price={prod.price} description={prod.description} />
        }
      })}
      </div>
      </div>
    </div>
  )
}

export default MainCourses;
