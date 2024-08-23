import React from 'react'
import meals from '../../../assets/meals'
import Items from './Items'
import './item.css'

const Dessert = () => {
  return (
    <div  className='starters'>
        <div className='stat'>
        <div className='starter-text' >
            <p>Desserts</p>
            {/* <p>Starters</p> */}
            <p>End your meal on a sweet note with our selection of traditional African desserts</p>
        </div>
        <div className='starter-div'>
      {meals.map((prod,i)=>{
        if (prod.category === "desserts"){
            return<Items key={i} img={prod.image} name={prod.name} price={prod.price} description={prod.description} />
        }
      })}
      </div>
      </div>
    </div>
  )
}

export default Dessert
