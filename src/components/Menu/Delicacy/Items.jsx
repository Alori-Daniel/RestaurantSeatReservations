import React from 'react'
import './item.css'
import '../../../assets/imageHover.png'

const Items = (props) => {
  return (
    <div className='item'>
        <div className='image-container'>
        <div className="shadow-overlay"></div>
            <img src={props.img} alt="" />
            <div className='info-section'>
                <p>{props.description}</p>
            </div>
        </div>
      <div className='item-div'>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default Items
