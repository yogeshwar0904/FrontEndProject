import React from 'react'
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'
import ImageData from './ImageData'
import { ProductPreview } from './ProductPreview'
import './OrderDelivery.css'
import BookingMesage from './BookingMesage'
import { mensOutfit } from '../components/OutfitData'
import { HomeFooter } from '../components/HomeFooter'
import { useLocation } from 'react-router-dom'

const OrderDelivery = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className='out-container'>
        <HomeHeader/>
        <Catogeries/>
        <BookingMesage/>
        <div className='page'>
        
        <div className='container2'>
        <ProductPreview/>
        </div> 
        <div className='order-delivery'>
        <ImageData {...data.productInfo}/> 
        </div> 
        <div className='footer-page'>
          <HomeFooter clothItems = {mensOutfit}/>
        </div>
        
        </div>
       
    </div>
  )
}

export default OrderDelivery