import React from 'react'
import ClothTypes from '../components/ClothTypes'
import Home from '../components/Home'
import HomeProfile from '../components/HomeProfile'
import Product from '../components/Product'
import Slider from '../components/Slider'
import { productData } from '../components/Data'

const HomePage = () => {
  return (
    <div>
        <Home/>
        <HomeProfile/>
        <Slider/>
        <Product obj = {productData} />
        <ClothTypes/>
    </div>
  );
}

export default HomePage;