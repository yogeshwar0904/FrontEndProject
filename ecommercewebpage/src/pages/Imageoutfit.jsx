import React, { useState } from 'react'
import './Imageoutfit.css'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'
import { imageDetails } from './ProductSize'
import ProductInfo from './ProductInfo'
import ImageData from './ImageData'
export default function Imageoutfit () {

  return (
    <div className='outer-div'>  
    <HomeHeader/>
    <Catogeries/>
    <ImageData />
    <ProductInfo productDetails = {imageDetails}/>
    </div>
);}
 





 
