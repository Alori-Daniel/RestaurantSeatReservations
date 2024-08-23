import React from 'react'
import meals from '../../../assets/meals'
import Items from './Items'
import './item.css'

const Starters = () => {
  return (
    <div  className='starters'>
        <div className='stat'>
        <div className='starter-text' >
            <p>Menu</p>
            <p>Starters</p>
            <p>Begin your culinary journey with our selection of traditional African appetizers.</p>
        </div>
        <div className='starter-div'>
      {meals.map((prod,i)=>{
        if (prod.category === "starters"){
            return<Items key={i} img={prod.image} name={prod.name} price={prod.price} description={prod.description} />
        }
      })}
      </div>
      </div>
    </div>
  )
}

export default Starters
