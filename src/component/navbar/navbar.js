import React, { useState } from 'react'
import './navbar.css'
import{Link} from 'react-router-dom';
import{FaBars,FaTimes} from 'react-icons/fa'


const navbar = () => {
    const [icon ,setIcon] =useState(false)
    const handleClick= () =>{
        setIcon(!icon)
    }
    const closeSideDrawer=()=>{
        setIcon(false)
    }
    return (
        <>
       
        <div>
               
            <div className='header'>
                <div className='header_left'>
                    <h3>pizza<span>corner</span></h3>
                </div>
                <div className='nav-icon' onClick={handleClick}>
                    {
                        icon ? <FaTimes className="fa-times"></FaTimes>:<FaBars className="fa-bars"></FaBars>
                    }
                </div>
               
                    <nav>
                       <ul className={
                           icon ? 'nav-menu active':'nav-menu'
                       }>
                           <li>
                               <Link to='/' className='nav-links' onClick={closeSideDrawer}>Home</Link>
                           </li>
                           <li>
                               <Link to='/Pizza' className='nav-links' onClick={closeSideDrawer}>Pizza</Link>
                           </li>
                           <li>
                               <Link to='/Dessert' className='nav-links' onClick={closeSideDrawer}>Dessert</Link>
                           </li>
                           <li>
                               <Link to='/Drinks' className='nav-links' onClick={closeSideDrawer}>Drinks</Link>
                           </li>
                       </ul>
                    </nav>
                   
                </div>
            </div>
    
       
        </>
    )
}

export default navbar
