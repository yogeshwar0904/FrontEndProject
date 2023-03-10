import './Form.css'
import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

export const BookingForm = () => {
  const navigate = useNavigate();
  
  function bookingMessage(){
    navigate('/bookingmessage')
   } 
  return (
    <div >
      <form>
        
      <div class="elem-group">
         <label >Mobile Number</label>
         <input type="text" id="name" name="visitor_name" placeholder="" required/>
      </div>
      <div class="elem-group1">
         <label for="email">Your g-mail</label>
         <input type="email" id="email" name="visitor_email" placeholder="john91@gmail.com" required/>
      </div>
      <div class="elem-group1 ">
        <label for="price">Price</label>
        <input type="number"  name="price"  required/>
       </div>
       <div class="elem-group1 inlined">
         <label for="child">Offer</label>
         <input type="number"  name="total_children"   required/>
       </div>
       <div class="elem-group1">
    <label for="room-selection">Select Mode of Pay</label>
    <select id="room-selection" name="room_preference" required>
        <option value="connecting">Cash On Delivery</option>
        <option value="adjoining">Card</option>
    </select>
  </div>
  <button type="submit" className='button1' onClick={bookingMessage}>Buy The Product</button>
      </form>
    </div>
  )
}
