import React from 'react'
import img from '../pic/pic1.jpg'
import './info.css'

const Desert1 = () => {
  return (
    <div className='container1'>
        <div className='img'>
        <img src={img} alt="" />
        </div>
        <div className='right1'>
            <p>Choco Sundae Cup (100 ml)</p>
        </div>
    </div>
  )
}

export default Desert1