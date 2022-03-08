import React from 'react'
import './dessert.css'
import img from './pic/pic1.jpg'
import img2 from './pic/pic2.jpg'
import img3 from './pic/pic3.jpg'
import img4 from './pic/pic4.jpg'
import img5 from './pic/pic5.jpg'
import { Link } from 'react-router-dom'

const Dessert = () => {
    return (
        <div className='container'>
          
        <div className='dessert_list'>
            <img src={img} alt="" />
            <h3>name:<span>Choco sundare</span></h3>
            <h3>price:<span>50</span></h3>
            <ul>
                <Link to="/desert/info">More info</Link>
            </ul>
        </div>
        <div className='dessert_list'>
        <img src={img2} alt="" />
            <h3>name:<span>Cornetto Double Chocolate</span></h3>
            <h3>price:<span>30</span></h3>
            <ul>
                <Link to="/desert/cornato_info">More info</Link>
            </ul>
        </div>
        <div className='dessert_list'>
        <img src={img3} alt="" />
            <h3>name:<span>Mangnum Truffle</span></h3>
            <h3>price:<span>50</span></h3>
            <ul>
                <Link to="/desert/mangum_info">More info</Link>
            </ul>
        </div>
        <div className='dessert_list'>
        <img src={img4} alt="" />
            <h3>name:<span>tandoori panner</span></h3>
            <h3>price:<span>80</span></h3>
            <ul>
                <Link to="/desert/tandoori_info">More info</Link>
            </ul>
        </div>
     
        <div className='dessert_list'>
        <img src={img5} alt="" />
            <h3>name:<span>Divvine Chocolate</span></h3>
            <h3>price:<span>100</span></h3>
            <ul>
                <Link to="/desert/divine_chocolate_info">More info</Link>
            </ul>
        </div>
     
       
    </div>
    )
}

export default Dessert
