import React from 'react'
import { useLocation } from 'react-router-dom'
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'
import ImageData from './ImageData'
import UserPreviewForm from './UserPreviewForm'
import './ShippingUserProduct.css'
const ShippingUserProduct = () => {
  const location = useLocation();
  const data = location.state;
  console.log("Shipping Form:::::" ,data)
  return (
    <div className='page-color'>
        <HomeHeader/>
        <Catogeries/>
        <UserPreviewForm/>
        <div className='image-style'>
        <ImageData/>
        </div>
        
    </div>
  )
}

export default ShippingUserProduct