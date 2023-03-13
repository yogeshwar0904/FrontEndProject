import './Form.css'
import React, { useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

export const BookingForm = () => {
  const location = useLocation
  const data = location.state
  const navigate = useNavigate();
  const [userDetails, setUserDetails]= useState({mobileNumber:""},{address:""},{pincode:""})

  function fetchvalue(event) {
    setUserDetails( {mobileNumber:event.target.value})
    setUserDetails( {address:event.target.value})
    setUserDetails( {pincode:event.target.value})
  }
   
  console.log(userDetails.mobileNumber)  
    
  function bookingMessage(){
    navigate('/bookingmessage')
   } 

  return (
    <div >
      <form className>
        
      <div class="elem-group">
         <label >Mobile Number</label>
         <input value={userDetails.mobileNumber}  type="text" placeholder="" name="mobileNumber" onChange ={fetchvalue} required/>
      </div>
      <div class="elem-group1">
         <label for="email">Address</label>
         <textarea value={userDetails.address} type="address"  placeholder="address"   name= "address" onChange ={(event) => fetchvalue(event)} required/>
      </div>
      <div class="elem-group1 ">
        <label for="price">Pincode</label>
        <input value={userDetails.pincode} type="number"  placeholder="000-000"  onChange ={(event) => fetchvalue(event)} required/>
       </div>

  <button type="submit" className='button1' onClick={bookingMessage} >Buy The Product</button>
      </form>
    </div>
  )
}
