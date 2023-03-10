import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { imageDetails } from './ProductSize';

 const ProductInfo = (props) => {
  
        const location = useLocation()
        const data = location.state;
        const navigate = useNavigate(); 
        const [active, setActive] = useState(false);
        function AddToCart (){
            navigate("/cartproduct", {state:data})
        }
       
        function buyProduct(){
            navigate("/customerorder", {state:data});
         }
      
         const handleClick = () => {
            if(props.sizeType === data.sizeType) {
            setActive(!active);
            } else {
               setActive(active);
            }
          };

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
                       <input type="radio"  hidden id={values.size}/>
                       <button onClick={handleClick} class={active ?" size-radio-btn btnnn":"size-radio-btn" }><label  >{values.sizeType}</label></button>
                    </div>
                 )})}
            <button class="btn cart-btn" onClick={buyProduct}>buy</button>
            <button class="btn" onClick={AddToCart} >add to cart</button>
         </div>
        </div>
         )}

export default ProductInfo