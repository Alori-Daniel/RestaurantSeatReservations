import React from 'react'
import meals from '../../../assets/meals'
import Items from './Items'
import './item.css'

const Specialities = () => {
  return (
    <div  className='starters specials'>
        <div className='stat'>
        <div className='starter-text' >
            <p>Specialties</p>
            {/* <p>Starters</p> */}
            <p>Indulge in our chef's specialties, crafted to bring out the best of African cuisine.</p>
        </div>
        <div className='starter-div'>
      {meals.map((prod,i)=>{
        if (prod.category === "specialities"){
            return<Items key={i} img={prod.image} name={prod.name} price={prod.price} />
        }
      })}
      </div>
      </div>
    </div>
  )
}

export default Specialities
