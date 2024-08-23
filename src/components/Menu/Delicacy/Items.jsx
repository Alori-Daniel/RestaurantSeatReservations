import React from 'react'
import './item.css'

const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.img} alt="" />
      <div className='item-div'>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default Items
