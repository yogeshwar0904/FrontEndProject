import React from 'react'
import './Product.css'
import { productData } from './Data'

function Product (props) {

   const productCost = props.productData.map((data) => {
   <div >
   <section class="product">
      <h2 class="product-category">best selling</h2>
         <div className='product-container'>

            <div className='product-card' >
                <div className='product-image' key={data.id}>
                   <span class="discount-tag">{data.offer} </span>
                   <img src={data.URL} class="product-thumb" alt=""/>
                </div>
                <div class="product-info" key={data.id}>
                   <h2 class="product-brand">brand</h2>
                   <span class="price">{data.price}</span>
                   <span class="actual-price">{data.actualPrice}</span>
                </div>
            </div>

         </div>
   </section>  

 </div>
});

  return (
    <div>
      {productCost}
    </div>
  );
  
}

export default Product