import React from 'react'
import '../components/Product'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'
import { useLocation } from 'react-router-dom'

const Imageoutfit = () => {
  const location = useLocation()
  const data = location.state;
  return (
    <div>
    <HomeHeader/>
    <Catogeries/>
      <div>
         <div className='product-container'>
         <div className='product-card' >
             <div className='product-image'>
                <span class="discount-tag">{data.offer} </span>
               <img src={data.URL} class="product-thumb"/> 
                <button class="card-btn">add to whislist</button>
             </div>
             <div class="product-info">
                <h2 class="product-brand">brand</h2>
                <span class="price">{data.price}</span>
                <span class="actual-price">{data.actualPrice}</span>
             </div>
         </div>
         </div>
      </div>
</div>
);}
export default Imageoutfit