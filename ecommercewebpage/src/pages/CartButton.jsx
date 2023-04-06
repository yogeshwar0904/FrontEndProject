import React from 'react'
import './CartButton.css'
import { useLocation, useNavigate } from 'react-router-dom'
const CartButton = () => {
    const navigate = useNavigate();
    const sesstion = sessionStorage.getItem("keys");
    const bookTheProduct = JSON.parse(sesstion);

    function buyProduct() {
       navigate('/customerorder',{state:bookTheProduct});
    }

    function removeProduct() {
       sessionStorage.removeItem("keys");
    }
    
    console.log("Is DATA IS VALID:::?",bookTheProduct);
  return (
    
    <div>
      {bookTheProduct !== null ? (
         <button className ='cart-button' onClick={buyProduct} >Place Order</button>        
        ):(<></>)}
      {bookTheProduct !== null ? (
         <button className ='cart-button cart-button2' onClick={removeProduct}>Remove</button>):(<></>)}
    </div>
  )
}

export default CartButton;