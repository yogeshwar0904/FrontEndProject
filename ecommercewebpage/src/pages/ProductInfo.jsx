import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { imageDetails } from './ProductSize';

 const ProductInfo = (props) => {
  
        const location = useLocation()
        const data = location.state;
        const navigate = useNavigate(); 
        const [active, setActive] = useState(false);
        console.log("listOfValues",props.productDetails)
        function AddToCart (){
            navigate("/cartproduct", {state:data})
        }
       
        function buyProduct(){
            navigate("/customerorder", {state:data});
         }
      
         const handleClick = (event) => {
            // if(val ) {

            // }
            // console.log("value:::",val);
            // setActive(!active);
            //console.log("");
      
            event.currentTarget.classList.toggle('size-radio-btn btnnn');
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
     
              {props.productDetails.map(values =>{
                 return(
                    <div >
                       <input type="radio"  hidden id={values.size}/>
                       <button key={values.size} onClick={(event) =>handleClick(event)} class="size-radio-btn"><label  >{values.sizeType}</label></button>
                       {/* {active ? 
                       (<button key={values.size} onClick={() =>handleClick(values.size)} class=" size-radio-btn btnnn"><label  >{values.sizeType}</label></button>)
                       : (<button key={values.size} onClick={() =>handleClick(values.size)} class="size-radio-btn"><label  >{values.sizeType}</label></button>)

                       } */}
                    </div>
                 )})}
            <button class="btn cart-btn" onClick={buyProduct}>buy</button>
            <button class="btn" onClick={AddToCart} >add to cart</button>
         </div>
        </div>
         )}

export default ProductInfo