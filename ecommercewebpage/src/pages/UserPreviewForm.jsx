import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './UserPreviewForm.css'
const UserPreviewForm = () => {
   const location = useLocation();
   const data = location.state;
   console.log('name:::::::::',data.fullName)
   const navigate = useNavigate();
   function routToBookingMessage(){
     navigate('/bookingmessage', {state:data})
   }
  return (
    <div>
        <div class="wrapper">
           <div class="title">
              <h1>CheckOut</h1>
              <div className='order-by'>
                  <h3>Login</h3>
                  <p>
                  {data.mobileNumber}
                  </p>
              </div>
              <div className='order-by address-details'>
                  <h3 >Deliver To</h3>
                  <p>
                  {data.fullName}, {data.address}<br/>
                  {data.city}<br/>
                  {data.pincode}<br/>
                </p>
              </div>
              
           </div>
           <div class="btn" onClick={routToBookingMessage}>Click to Continue</div>
        </div>
    </div>
  )
}

export default UserPreviewForm
