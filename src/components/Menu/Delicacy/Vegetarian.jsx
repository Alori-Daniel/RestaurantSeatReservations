import React from 'react'
import meals from '../../../assets/meals'
import Items from './Items'
import './item.css'

const Vegetarian = () => {
  return (
    <div  className='starters'>
        <div className='stat'>
        <div className='starter-text' >
            <p>Vegetarian Dishes</p>
            {/* <p>Starters</p> */}
            <p>Enjoy our plant-based offerings, bursting with the vibrant flavors of Africa</p>
        </div>
        <div className='starter-div'>
      {meals.map((prod,i)=>{
        if (prod.category === "vegetarian"){
            return<Items key={i} img={prod.image} name={prod.name} price={prod.price} description={prod.description} />
        }
      })}
      </div>
      </div>
    </div>
  )
}

export default Vegetarian;
