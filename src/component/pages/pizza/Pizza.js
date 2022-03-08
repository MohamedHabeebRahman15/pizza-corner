import React from 'react'
import './pizza.css'
import img from './pic/momo-mia-veg.5f34ea52c10db4a56881051692a618ca.1.jpg'
import img2 from './pic/pic2.jpg'
import img3 from './pic/pic3.jpg'
import img4 from './pic/pic4.jpg'
import img5 from './pic/pic5.jpg'
import img6 from './pic/pic6.jpg'
import img7 from './pic/pic7.jpg'
import img8 from './pic/pic8.jpg'
import img9 from './pic/pic9.jpg'

const Pizza = () => {
    return (
        <div className='container'>
          
        <div className='pizza_list'>
            <img src={img} alt="" />
            <h3>name:<span>momo mia pizza veg</span></h3>
            <h3>price:<span>100</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img2} alt="" />
            <h3>name:<span>momo mia pizza non-veg</span></h3>
            <h3>price:<span>130</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img3} alt="" />
            <h3>name:<span>margherita</span></h3>
            <h3>price:<span>150</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img4} alt="" />
            <h3>name:<span>tandoori panner</span></h3>
            <h3>price:<span>150</span></h3>
            <h2>View More</h2>
        </div>
     
        <div className='pizza_list'>
        <img src={img5} alt="" />
            <h3>name:<span>veggie subreme</span></h3>
            <h3>price:<span>120</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img6} alt="" />
            <h3>name:<span> Double Panner Supreme</span></h3>
            <h3>price:<span>160</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img7} alt="" />
            <h3>name:<span>Veg kebeb Surprice</span></h3>
            <h3>price:<span>100</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img8} alt="" />
            <h3>name:<span>jamuntini</span></h3>
            <h3>price:<span>160</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img8} alt="" />
            <h3>name:<span>Chicken Supreme</span></h3>
            <h3>price:<span>200</span></h3>
            <h2>View More</h2>
        </div>
        <div className='pizza_list'>
        <img src={img9} alt="" />
            <h3>name:<span>Chicken Tikka Supreme</span></h3>
            <h3>price:<span>250</span></h3>
            <h2>View More</h2>
        </div>
    </div>
    )
}

export default Pizza
