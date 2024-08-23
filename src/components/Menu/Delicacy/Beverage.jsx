import React from 'react'
import meals from '../../../assets/meals'
import Items from './Items'
import './item.css'

const Beverage = () => {
  return (
    <div  className='starters courses'>
        <div className='stat'>
        <div className='starter-text'  >
            <p style={{color:"black"}}>Beverages</p>
            {/* <p>Starters</p> */}
            <p style={{color:"black"}}>Complement your meal with our selection of African-inspired drinks.</p>
        </div>
        <div className='starter-div black-starter' >
      {meals.map((prod,i)=>{
        if (prod.category === "beverages"){
            return<Items key={i} img={prod.image} name={prod.name} price={prod.price} />
        }
      })}
      </div>
      </div>
    </div>
  )
}

export default Beverage;
