import React from "react";
import { useLocation } from "react-router-dom";

export default function ImageData () {
    const location = useLocation()
    const data = location.state;
   return (  
    <div className='image'>
    <div className='product-card' >
        <div className='product-image'>
           <span class="discount-tag">{data.offer} </span>
          <img src={data.URL} class="product-thumb"/> 
           <button class="card-btn">add to whislist</button>
        </div>
        <div class="product-info">
           <h2 class="product-brand">{data.brand}</h2>
           <span class="price">{data.price}</span>
           <span class="actual-price">{data.actualPrice}</span>
        </div>
    </div>
    </div>
   )
 }