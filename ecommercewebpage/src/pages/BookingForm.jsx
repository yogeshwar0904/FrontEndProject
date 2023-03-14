import './Form.css'
import React, { useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

export const BookingForm = () => {
  const location = useLocation
  const data = location.state
  const navigate = useNavigate();
  const [userDetails, setUserDetails]= useState({mobileNumber:'', address:'', pincode:''})

  function fetchMobileNumber(event) {
     setUserDetails({mobileNumber:event.target.value})
  }
   
  function fetchUserAddress(even) {
     setUserDetails({address:even.target.value})
  }

  function fetchUserPincode(eve) {
    setUserDetails({pincode:eve.target.value})
 }

  function bookingMessage(){
    navigate('/bookingmessage',{state:userDetails})
   } 

  return (
    <div >
      <form >
        
      <div className="elem-group">
         <label >Mobile Number</label>
         <input  type="number" placeholder=""  onChange ={(event)=>fetchMobileNumber(event)} required/>
      </div>
      <div className="elem-group1">
         <label >Address</label>
         <textarea type="text"  placeholder="address"   onChange ={ (even) => fetchUserAddress(even)} required/>
      </div>
      <div className="elem-group1 ">
        <label >Pincode</label>
        <input  type="number"  placeholder="000-000"  onChange ={(eve) => fetchUserPincode(eve)} required/>
       </div>

  <button type="submit" className='button1' onClick={bookingMessage} >Buy The Product</button>
      </form>
    </div>
  )
}
