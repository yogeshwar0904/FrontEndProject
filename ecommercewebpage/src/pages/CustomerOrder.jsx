import React from 'react'
import { useLocation } from 'react-router-dom';
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'

import { BookingForm } from './BookingForm';


const CustomerOrder = () => {
  const location = useLocation()
  const data = location.state
  return (
    <div>
      <HomeHeader/>
      <Catogeries/>
      <BookingForm/>
    </div>
  )
}

export default CustomerOrder