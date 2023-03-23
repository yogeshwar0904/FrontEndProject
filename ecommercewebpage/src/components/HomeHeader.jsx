import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import  './HomeHeader.css'
import ImageData from '../pages/ImageData'

const HomeHeader = (props) => {
   const location = useLocation()
   const data = location.useState
   const navigate = useNavigate()
  
   function cartBucket (){
      navigate("/cartproduct")
   }
  return (
    <nav className='header'>
       <div className='nav'>
        <img src="" className= 'brand-logo'/>
           <div className='nav-items'>
              <div className='search'>
                 <input type ="text" className="search-box" placeholder ="search brand, item"/>
                 <button className='search-btn'>Search</button>
              </div>
              <a><img src='img/user.png'/> </a>
              
              <a onClick={cartBucket} ><img src="img/cart.png"/></a>
              <div className='cart'></div>
           </div>
       </div>
    </nav>
  )
}

export default HomeHeader;