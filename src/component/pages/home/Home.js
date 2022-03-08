import React from 'react'
import img1 from './pic/pizza-3.jpg';
import img2 from './pic/download (1).jpg';
import './home.css';
import insta from './pic/insta-logo-300x300.png'
import mob from './pic/OIP.jpg'
import whatsup from './pic/depositphotos_215810790-stock-illustration-telephone-icon-symbol-vector-whatsapp.jpg'
import con from './pic/R.jpg'



const Home = () => {
    return (
        <div className='top'>
        <img src={img1} alt="" />
        <h3>This is the <span>BEST</span> pizza Ever</h3>
        <h2>Get Ready for <span>ORDER</span></h2>
        
        <div className='about'>
            <h3>About us</h3>
            <p>In June 2011, Pizza corner made its foray into India with a restaurant in Bangalore and was the first international restaurant chain to pioneer this category. The restaurant brand offers an exciting menu consisting of its signature pizzas, appetizers, pastas, desserts and beverages. Its trademark dining experience has been recognized by Brand Equity to make it the ‘Most Trusted Food Service Brand’ for 11 years in a row. Pizza corner is the most preferred pizza brand in India, given its freshest, tastiest and affordable Pizzas.
           
            </p>
            <img src={img2} alt="" />
       
        </div>
        <div className='contact'>
       
            <h3>Contact Us</h3>
            <img src={con} alt=''/>
            <h4><img src={mob} alt=''/><span>7878657998</span></h4>
            <h4><img src={whatsup} alt=''/><span>8190888237</span></h4>
            <h4><img src={insta} alt=''/><span>piizacorner</span></h4>
            <h4>Address:<span>
                <p>2/253,North Street</p>
                <p>Chittar Kottai</p>
                <p>Ramanathapuram</p>
            </span>
            </h4>
        </div>
        </div>
        
       
    )
}

export default Home
