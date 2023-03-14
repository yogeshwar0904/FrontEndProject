import React from 'react'
import { useLocation } from 'react-router-dom';
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'

import { BookingForm } from './BookingForm';


const CustomerOrder = () => {
  const location = useLocation()
  const {active,data} = location.state
  console.log("check the data", data.price)
  console.log("Size", active)
 
  return (
    <div>
      <HomeHeader/>
      <Catogeries/>
      <BookingForm/>
    </div>
  )
}

export default CustomerOrder