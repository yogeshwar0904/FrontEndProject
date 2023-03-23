import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './UserPreviewForm.css'
const UserPreviewForm = () => {
   const location = useLocation();
   const data = location.state;
   console.log('name:::::::::',data.fullName)
   const navigate = useNavigate();
   function routToBookingMessage(){
     navigate('/paymentpage', {state:data})
   }

   function routToCustomerOrder() {
    navigate('/customerorder', {state:data})
   }

  return (
    <div>
        <div class="wrapper">
           <div class="title">
              <h1>CheckOut</h1>
              <div className='order-by'>
                  <h4>Login</h4>
                  <p>
                  {data.mobileNumber}
                  </p>
                  <button className='edit-form' onClick={routToCustomerOrder}>change</button>
              </div>
              <div className='order-by address-details'>
                  <h4>Deliver To</h4>
                  <p>
                  {data.fullName},<br/> 
                  {data.address},<br/> 
                  {data.city},<br/>
                  {data.pincode}
                </p>
                <button className='edit-form'>change</button>
              </div>
              <div className='order-by'>
                  <p>
                   order conformation will send to {data.email}
                </p>
              </div>
              
              
           </div>
           <div class="btnn" onClick={routToBookingMessage}>Click to Continue</div>
        </div>
    </div>
  )
}

export default UserPreviewForm
