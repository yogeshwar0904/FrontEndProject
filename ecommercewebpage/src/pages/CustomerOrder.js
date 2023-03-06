import React from 'react'
import { useLocation } from 'react-router-dom';
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'
import { Imagedata } from './Imageoutfit';

const CustomerOrder = () => {
  const location = useLocation()
  const data = location.state;

  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        <Imagedata/>
    </div>
  )
}

export default CustomerOrder