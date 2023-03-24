import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Paymentform.css'
const PaymentForm = () => {
  const rout = useNavigate();
  const location = useLocation();
  const data = location.state;
  function deliveryOrder(){
     rout("/orderdelivery", {state:data});
  }
  return (
    <div className='out-con'>
    <div className='page-container'>
    <div className='header-container'>
        <h1>
           Payment Option
        </h1>
    </div>
    <div className='header-container hea'>
    <input type="radio" id="upi" name="payment" value="upi"  checked/>
      <label for="">UPI</label>
    </div>
    <div className='header-container hea'>
    <input type="radio" id="phone-pay" name="payment" value="Phone-pay" checked/>
      <label for="">Phone pay</label>
    </div>
    <div className='header-container hea'>
    <input type="radio" id="cards" name="payment" value="card"  checked/>
      <label for="">Credit/Debit/ATM card</label>
    </div>
    <div className='header-container hea'>
    <input type="radio" id="cash" name="payment" value="cash"  checked/>
      <label for="">Cash on Delivery</label>
    </div>
    <button type="submit" className='butn' onClick={deliveryOrder} >CONFIRM ORDER</button>
    </div>
    </div>
  )
}

export default PaymentForm