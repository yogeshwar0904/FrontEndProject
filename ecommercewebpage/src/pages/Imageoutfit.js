import React, { useState } from 'react'
import '../components/Product'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'
import './ImageOutfit.css'
import { imageDetails } from './ProductSize'
import ProductInfo from './ProductInfo'
import ImageData from './ImageData'
export default function Imageoutfit () {

  return (
    <div>  
    <HomeHeader/>
    <Catogeries/>
    <ImageData />
    <ProductInfo productDetails = {imageDetails}/>
    </div>
);}
 





 
