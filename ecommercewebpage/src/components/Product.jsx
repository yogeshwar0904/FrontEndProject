import React from 'react'
import './Product.css'


const Product = (props) => {
    return (
    <div>  
        {props.obj.map(data => {
                  return(
   <section class="product">
      <h2 class="product-category">best selling</h2>
            <div className='product-container'>
            
            <div className='product-card' >
                <div className='product-image'>
                   <span class="discount-tag">{data.offer} </span>
                   <img src={data.URL} class="product-thumb" alt=""/>
                   
                </div>
                <div class="product-info">
                   <h2 class="product-brand">brand</h2>
                   <span class="price">{data.price}</span>
                   <span class="actual-price">{data.actualPrice}</span>
                </div>
            </div>
            </div>

   </section> 
    )})}
   </div>
);}

export default Product;