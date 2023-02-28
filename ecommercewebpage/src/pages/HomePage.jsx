import React from 'react'
import ClothTypes from '../components/ClothTypes'
import Home from '../components/HomeHeader.jsx'
import HomeProfile from '../components/HomeProfile'
import Product from '../components/Product'
import Slider from '../components/Slider'
import { productData } from '../components/Data'
import Catogeries from '../components/Catogeries'
const HomePage = () => {
  return (
    
    <div>
        <Home/>  
        <Catogeries/>
        <HomeProfile/>
        <Slider/>
        <Product obj = {productData} />
        <ClothTypes/>
    </div>
  
  );
}

export default HomePage;