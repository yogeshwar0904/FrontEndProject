import React from 'react'
import { useLocation } from 'react-router-dom';
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'
import ImageData from './ImageData';

const CustomerOrder = () => {
  const location = useLocation()
  const data = location.state

  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        <ImageData/>
      <div>
        {data.length === 0 && <div>ca</div>}
      </div>
       
    </div>
  )
}

export default CustomerOrder