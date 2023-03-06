import React from 'react'
import '../components/Product'
import HomeHeader from '../components/HomeHeader'
import Catogeries from '../components/Catogeries'
import { useLocation, useNavigate } from 'react-router-dom'
import './ImageOutfit.css'
import { Link } from 'react-router-dom'
import { imageDetails } from './ImageOutfitData'
import { replace } from 'react-router-dom'

export default function Imageoutfit  () {
  return (
    <div>
    <HomeHeader/>
    <Catogeries/>
    <Imagedata/>
    <PrductInfo obj ={imageDetails}/>
    </div>
);}



export function Imagedata () {
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

export function PrductInfo (props) {
   const location = useLocation()
   const data = location.state;
   const navigate = useNavigate(); 

   function AddToCart (){
      navigate("/customerorder", {state:{data:[]}} );
      console.log(data);
   }

  return (
    <div>
         <div class="details">
        <h2 class="product-brand">calvin klein</h2>
        <p class="product-short-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <span class="product-price">{data.price}</span>
        <span class="product-actual-price">{data.actualPrice}</span>
        <span class="product-discount">{data.offer} </span>
        <p class="product-sub-heading">select size</p>

         {props.obj.map(values =>{
            return(
               <div >
                  <input type="radio" name="size" value="s" hidden id={values.size}/>
                  <label for={values.size} class="size-radio-btn check">{values.sizeType}</label>
               </div>
            )})}
       <Link to="/customerorder" state={data}><button class="btn cart-btn">buy</button></Link>
       <button class="btn" onClick={AddToCart}>add to cart</button>
    </div>
   </div>
    )}

 
