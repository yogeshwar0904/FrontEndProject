import './Form.css'
import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

export const BookingForm = () => {
  const location = useLocation
  const data = location.state
  const navigate = useNavigate();
  
  function bookingMessage(){
    navigate('/bookingmessage')
   } 
  return (
    <div >
      <form className>
        
      <div class="elem-group">
         <label >Mobile Number</label>
         <input type="text" placeholder="" required/>
      </div>
      <div class="elem-group1">
         <label for="email">Address</label>
         <textarea type="address"  placeholder="address" required/>
      </div>
      <div class="elem-group1 ">
        <label for="price">Pincode</label>
        <input type="number"  placeholder="000-000"  required/>
       </div>

  <button type="submit" className='button1' onClick={bookingMessage}>Buy The Product</button>
      </form>
    </div>
  )
}
