import React from "react";
import { useLocation } from "react-router-dom";

export default function ImageData () {
    const location = useLocation()
    const data = location.state;
   return (  
    <div className='image'>
    <div className='product-card'>
        <div className='product-image'>
           <span className="discount-tag">{data.offer} </span>
          <img src={data.URL} className="product-thumb"/> 
           <button className="card-btn">add to whislist</button>
        </div>
        <div className="product-info">
           <h2 className="product-brand">{data.brand}</h2>
           <span className="price">{data.price}</span>
           <span className="actual-price">{data.actualPrice}</span>
        </div>
    </div>
    </div>
   )
 }