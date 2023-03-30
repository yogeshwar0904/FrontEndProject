import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import  './HomeHeader.css'
import ImageData from '../pages/ImageData'
import { ProductInfo } from '../pages/ProductInfo'
const HomeHeader = () => {
   const navigate = useNavigate()
   console.log("check productinfo", ProductInfo)

  

   // const cartS = sessionStorage.getItem("keys");
   //  const addToBag = JSON.parse(cartS);
   //  console.log("SESSION::::::::GOT", addToBag.count)


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
      
              <a><img src="https://www.transparentpng.com/thumb/human/black-human-user-profile-png-icon-free-fsR5FT.png" /> </a> 
              <a onClick={cartBucket} ><img src="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png"/></a>
              <div className='cart'></div>
           </div>
       </div>
    </nav>
  )
}

export default HomeHeader;