import React from 'react'
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'
import ImageData from './ImageData'
import { ProductPreview } from './ProductPreview'
import './OrderDelivery.css'
import BookingMesage from './BookingMesage'

const OrderDelivery = () => {
  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        <BookingMesage/>
        <div className='page'>
        
        <div className='container2'>
        <ProductPreview/>
        </div> 
        <div className='order-delivery'>
        <ImageData/> 
        </div> 
        </div>
    </div>
  )
}

export default OrderDelivery