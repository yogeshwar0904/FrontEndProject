import React from 'react'
import Catogeries from '../components/Catogeries'
import HomeHeader from '../components/HomeHeader'
import ImageData from './ImageData'
import { ProductPreview } from './ProductPreview'
import './OrderDelivery.css'
import Product from '../components/Product'
import { productData } from '../components/Data'
const OrderDelivery = () => {
  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        <div className='container2'>
        <ProductPreview/>
        </div>   
    </div>
  )
}

export default OrderDelivery