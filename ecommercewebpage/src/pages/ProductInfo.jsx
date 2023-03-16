import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { imageDetails } from './ProductSize';

 const ProductInfo = (props) => {
  
        const location = useLocation()
        const data = location.state;
        const navigate = useNavigate(); 
        const [active, setActive] = useState('');
       

        function AddToCart (){
            navigate("/cartproduct", {state:data})
        }
      
        function buyProduct(){
         if (active !== '') {
            data.size=active;
            navigate("/customerorder", {state :data});
            
         } else {
            alert("Please select the size!!!")
          }}

       return (
         <div>
             <div className="details">
             <h2 className="product-brand">{data.brand}</h2>
             <p className="product-short-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             <span className="product-price">{data.price}</span>
             <span className="product-actual-price">{data.actualPrice}</span>
             <span className="product-discount">{data.offer} </span>
             <p className="product-sub-heading">select size</p>
     
              {props.productDetails.map(values =>{
                 return(
                    <div key={values.key}>
                       <input type="radio"  hidden id={values.sizeType}/>
                       {active === values.sizeType ?
                     
                       (<button   onClick={() =>setActive(values.sizeType)} className=" size-radio-btn btnnn"><label  >{values.sizeType}</label></button>)
                       : (<button  onClick={() =>setActive(values.sizeType)} className="size-radio-btn"><label>{values.sizeType}</label></button>)
                     }
                       
                    </div>
                 )})}
                 
            <button  className="btn cart-btn" onClick={buyProduct}>buy</button>
            <button className="btn cart-btn" onClick={AddToCart} >add to cart</button>
         </div>
        </div>
         )}

export default ProductInfo