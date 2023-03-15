import React from 'react'
import { useLocation } from 'react-router-dom';
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'

import { BookingForm } from './BookingForm';
import ImageData from './ImageData';

const CustomerOrder = () => {
  const location = useLocation()
  const {data} = location.state
  console.log("Object",data)
 
  return (
    <div>
      <HomeHeader/>
      <Catogeries/>
      <BookingForm/>
    </div>
  )
}

export default CustomerOrder