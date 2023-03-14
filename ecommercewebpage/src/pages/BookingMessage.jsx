import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'

import './BookingMessage.css'
import { useLocation } from 'react-router-dom'
const BookingMessage = () => {
 const location = useLocation()
 const data = location.state
 console.log("userDetails",data);
 console.log("name",data.mobileNumber);
  return (
    <div>
       <HomeHeader/>
       <Catogeries/>
        <h1 className='heade'>Product Booked Successfully!!!</h1>
    </div>
  )
}

export default BookingMessage