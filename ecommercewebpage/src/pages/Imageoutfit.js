import React from 'react'
import '../components/Product'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'
import './ImageOutfit.css'
import { imageDetails } from './ImageOutfitData'
import ProductInfo from './ProductInfo'
import ImageData from './ImageData'
export default function Imageoutfit () {
  return (
    <div>
    <HomeHeader/>
    <Catogeries/>
    <ImageData />
    <ProductInfo obj = {imageDetails}/>
    </div>
);}





 
