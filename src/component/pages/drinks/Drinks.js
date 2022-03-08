import React from 'react'
import './drink.css'
import img from './pic/download (2).jpg'
import img1 from './pic/download (3).jpg'
import img2 from './pic/download (4).jpg'
import img3 from './pic/download (5).jpg'
import img4 from './pic/download (6).jpg'
import img5 from './pic/download (7).jpg'
import img6 from './pic/download (8).jpg'
import img7 from './pic/download (10).jpg'
import img9 from './pic/download.jpg'
import img10 from './pic/download (9).jpg'

const Drinks = () => {
    return (
        <div className='container'>
          
            <div className='drink_list'>
                <img src={img} alt="" />
                <h3>name:<span>pepsi</span></h3>
                <h3>price:<span>30</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img1} alt="" />
                <h3>name:<span>pepsi black</span></h3>
                <h3>price:<span>35</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img4} alt="" />
                <h3>name:<span>miranda</span></h3>
                <h3>price:<span>30</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img7} alt="" />
                <h3>name:<span>masala lemonde</span></h3>
                <h3>price:<span>40</span></h3>
                <h2>View More</h2>
            </div>
         
            <div className='drink_list'>
            <img src={img10} alt="" />
                <h3>name:<span>coloa</span></h3>
                <h3>price:<span>35</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img5} alt="" />
                <h3>name:<span> masalapepsi</span></h3>
                <h3>price:<span>40</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img6} alt="" />
                <h3>name:<span>masala miranda</span></h3>
                <h3>price:<span>40</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img9} alt="" />
                <h3>name:<span>jamuntini</span></h3>
                <h3>price:<span>50</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img2} alt="" />
                <h3>name:<span>pepsi glass</span></h3>
                <h3>price:<span>50</span></h3>
                <h2>View More</h2>
            </div>
            <div className='drink_list'>
            <img src={img3} alt="" />
                <h3>name:<span>pepsi family combo</span></h3>
                <h3>price:<span>120</span></h3>
                <h2>View More</h2>
            </div>
        </div>
    )
}

export default Drinks
