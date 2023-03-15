import './Form.css'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const BookingForm = () => {
  const location = useLocation
  const data = location.state
  const navigate = useNavigate();
  console.log("hiiii", data)
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
    <div>
    <div className="outer-container">
    <div className='container '>

      <form className='form'>
        <header >Customer Details</header>

      <div className='input-box'>
         <label >Full Name</label>
         <input  type="number" placeholder=""  onChange ={(event)=>fetchMobileNumber(event)} required/>
      </div>

      <div className='input-box'>
         <label >E-mail Address</label>
         <input type="text"  placeholder=""   onChange ={ (even) => fetchUserAddress(even)} required/>
      </div>

      <div className='input-box'>
        <label >Mobile Number</label>
        <input  type="number"  placeholder=""  onChange ={(eve) => fetchUserPincode(eve)} required/>
       </div>
       
      
       <div className='input-box address'>
        <label >Address</label>
        <input  type="number"  placeholder="Enter street address"  required/>
        <input  type="number"  placeholder="Enter street address line 2" required/>

        <div  className='column'>
           <div className='select-box'>
               <select>
                <option hidden>State</option>
                <option >Tamil Nadu</option>
                <option >Kerala</option>
                <option >Andra</option>
                <option >Karnataka</option>
               </select>
           </div>
           <input  type="number"  placeholder="Enter your city"  required/>
        </div>
        <div className='column'>
        <input  type="number"  placeholder="Enter your region"  required/>
        <input  type="number"  placeholder="Enter postal code"  required/>
        </div>

       </div>
       
        <button type="submit" className='button1' onClick={bookingMessage} >Click To Continue</button>
      
      </form>
    </div>
    <div>
      <h2 className='container1'>Product Data</h2>
    </div>
    </div>
   
    </div>
  )
}
