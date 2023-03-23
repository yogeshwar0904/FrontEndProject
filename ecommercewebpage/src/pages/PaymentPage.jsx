import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'

import './PaymentPage.css'
import { useLocation } from 'react-router-dom'
import ImageData from './ImageData'
import PaymentForm from './PaymentForm'
import { ProductPreview } from './ProductPreview'
const PaymentPage = () => {
 const location = useLocation()
 const data = location.state
 console.log("userDetails",data);
 console.log("name",data.fullName);
  return (
    <div>
       <HomeHeader/>
       <Catogeries/>
       <PaymentForm/>
    </div>
  )
}

export default PaymentPage

