import './Form.css'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {useForm } from 'react-hook-form'
export const BookingForm = () => {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate();
  const datas = ({fullName: '', email:'', mobileNumber:'', address:'', city:'',pincode:''})
  const [userDetails, setUserDetails]= useState(datas)

  const  userOutfit = {...userDetails, ...data};
  
   function getDatas(event) {
      const {name, value} = event.target;
       setUserDetails({ ...userDetails, [name]:value})
       
   }

  function bookingMessage() {
    navigate('/shippinguserproduct',{state:userOutfit});
   } 

  return(
    <div >
    <div className="outer-container">
    <div className='container '>

      <form className='form' onSubmit={ (event) => bookingMessage(event)}>
        <header >Sign-up</header>

      <div className='input-box'>
         <label>Full Name</label>
         <input  type="text" key={userDetails.fullName} id ='fullName' name ='fullName' placeholder=""  onChange ={(event)=>getDatas(event)} required/>
      </div>

      <div className='input-box'>
         <label >E-mail Address</label>
         <input type="text"  key={userDetails.email} id='email' name='email' placeholder=""   onChange ={(event) => getDatas(event)} required/>
      </div>      

      <div className='input-box'>
        <label >Mobile Number</label>
        <input  type="number"   id='mobileNumber' name='mobileNumber' placeholder=""  onChange ={(event) => getDatas(event)} required/>
       </div>
       
      
       <div className='input-box address'>
        <label >Address</label>
        <input  type="text"  id ="address" name='address' placeholder="Enter street address" onChange ={(event) => getDatas(event)}  required/>
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
           <input  type="text"  placeholder="Enter your city" name='city' onChange ={(event)=>getDatas(event)} required/>
        </div>
        <div className='column'>
        <input  type="text"  placeholder="Enter your region"  required/>
        <input  type="number"  name='pincode'placeholder="Enter postal code"  onChange ={(event)=>getDatas(event)} required/>
        </div>

       </div>
       
        <button type="submit" className='button1' >Click To Continue</button>
      
      </form>
    </div>

    </div>
   
    </div>
  )
}
