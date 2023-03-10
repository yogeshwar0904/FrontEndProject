import React from 'react'
import Catogeries from '../components/Catogeries'
import HomeProfile from '../components/HomeProfile'
import Slider from '../components/Slider'
import Product from '../components/Product'

import HomeHeader from '../components/HomeHeader'
import { productData } from '../components/Data'
import { mensOutfit } from '../components/OutfitData'
import { HomeFooter } from '../components/HomeFooter'

const Layout = () => {
  return (
    <div >
       <HomeHeader />
       <Catogeries/>
       <HomeProfile/>
       <Slider/>
       <Product obj = {productData}/>
       <HomeFooter obj = {mensOutfit}/>
    </div> 
  )
}
export default Layout