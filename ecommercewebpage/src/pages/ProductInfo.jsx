import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 const ProductInfo = (props) => {
        const location = useLocation()
        const data = location.state;
        const navigate = useNavigate(); 
        console.log("hiii", data.id)
        function AddToCart (){
            navigate("/cartproduct", {state:data})
        }
       
        function buyProduct(){
            navigate("/customerorder", {state:data});
         }
       return (
         <div>
             <div class="details">
             <h2 class="product-brand">{data.brand}</h2>
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
            <button class="btn cart-btn" onClick={buyProduct}>buy</button>
            <button class="btn" onClick={AddToCart} >add to cart</button>
         </div>
        </div>
         )}

export default ProductInfo