import React from 'react'
import Catogeries from '../components/Catogeries'
import HomeProfile from '../components/HomeProfile'
import Slider from '../components/Slider'
import Product from '../components/Product'
import {ClothTypes} from '../components/ClothTypes'
import HomeHeader from '../components/HomeHeader'
import { productData } from '../components/Data'
import { mensOutfit } from '../components/OutfitData'

const Layout = () => {
  return (
    <div>
       <HomeHeader/>
       <Catogeries/>        
       <HomeProfile/>
       <Slider/>
       <Product obj = {productData}/>
       <ClothTypes obj = {mensOutfit}/>
    </div> 
  )
}
export default Layout