import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {

   return (
     <div className="product" >
        {props.productDetails.map(data => {
                  return(
         <div key ={data.key}>
            <div className='product-container'>
            <div className='product-card' >
                <div className='product-image'>
                   <span className="discount-tag">{data.offer} </span>
                   <Link to= "/imageoutfit"  state={data}><img src={data.URL} className="product-thumb"/> </Link>
                   <button className="card-btn">add to whislist</button>
                </div>
                <div className="product-info">
                   <h2 className="product-brand">{data.brand}</h2>
                   <span className="price">{data.price}</span>
                   <span className="actual-price">{data.actualPrice}</span>
                </div>
            </div>
            </div>
         </div>
    )})}

   </div>
);}

export default Product;