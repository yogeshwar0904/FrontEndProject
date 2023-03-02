import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {

   return (
     <div class="product"> 
     
        {props.obj.map(data => {
                  return(
         <div>
            <div className='product-container'>
            <div className='product-card' >
                <div className='product-image'>
                   <span class="discount-tag">{data.offer} </span>
                   <Link to= "/image1outfit" state={data}><img src={data.URL} class="product-thumb"/> </Link>
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
    )})}

   </div>
);}

export default Product;