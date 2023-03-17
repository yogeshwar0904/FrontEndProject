import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'

import './BookingMessage.css'
import { useLocation } from 'react-router-dom'
import ImageData from './ImageData'
import PaymentForm from './PaymentForm'
import { ProductPreview } from './ProductPreview'
const BookingMessage = () => {
 const location = useLocation()
 const data = location.state
 console.log("userDetails",data);
 console.log("address",data.address);
  return (
    <div>
       <HomeHeader/>
       <Catogeries/>
       <PaymentForm/>
       <ProductPreview/>
    </div>
  )
}

export default BookingMessage

