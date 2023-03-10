import React, { useState } from 'react'
import '../components/Product'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'
import './ImageOutfit.css'
import { imageDetails } from './ProductSize'
import ProductInfo from './ProductInfo'
import ImageData from './ImageData'
import { useLocation } from 'react-router-dom'
export default function Imageoutfit () {

  return (
    <div>  
    <HomeHeader/>
    <Catogeries/>
    <ImageData PassData={PassData}/>
    <ProductInfo obj = {imageDetails}/>
    </div>
);}
 
function PassData(){
  const location = useLocation()
  const data = location.state
  const [routData, setRoutData] = useState([]);
  setRoutData(data)
  console.log("datastored",routData.price)
}




 
