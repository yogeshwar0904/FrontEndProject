import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'

import './BookingMessage.css'
const BookingMessage = (props) => {

  return (
    <div>
       <HomeHeader/>
       <Catogeries/>
        <h1 className='heade'>Product Booked Successfully!!!</h1>
    </div>
  )
}

export default BookingMessage