import './Form.css'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {useForm } from 'react-hook-form'
export const BookingForm = () => {
  const location = useLocation
  const data = location.state
  const navigate = useNavigate();
  console.log("hiiii", data)
  const datas = ({fullName:'', email:'', pincode:''})
  const [userDetails, setUserDetails]= useState(datas)

   function getDatas(event){
    const {name, value} = event.target.value;
       setUserDetails({...setUserDetails, name:[value]})
   }

  const {register} = useForm();

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

      <form className='form' onSubmit={getDatas}>
        <header >Customer Details</header>

      <div className='input-box'>
         <label>Full Name</label>
         <input  type="text" id ='fullName' name ='fullName' placeholder=""  onChange ={(event)=>getDatas(event)} required/>
      </div>

      <div className='input-box'>
         <label >E-mail Address</label>
         <input type="text"  id='email' name='email' placeholder=""   onChange ={(even) => getDatas(even)} required/>
      </div>

      <div className='input-box'>
        <label >Mobile Number</label>
        <input  type="number"  id='mobileNumber' name='mobileNumber' placeholder=""  onChange ={(eve) => getDatas(eve)} required/>
       </div>
       
      
       <div className='input-box address'>
        <label >Address</label>
        <input  type="text"  placeholder="Enter street address"  required/>
        <input  type="text"  placeholder="Enter street address line 2" />

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
           <input  type="text"  placeholder="Enter your city"  required/>
        </div>
        <div className='column'>
        <input  type="text"  placeholder="Enter your region"  required/>
        <input  type="number"  placeholder="Enter postal code"  required/>
        </div>

       </div>
       
        <button type="submit" className='button1' onClick={bookingMessage}>Click To Continue</button>
      
      </form>
    </div>

    </div>
   
    </div>
  )
}
