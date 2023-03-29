import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import HomeHeader from '../components/HomeHeader';
import Catogeries from '../components/Catogeries';
import ImageData from './ImageData';
import './Cartproduct.css'
import Emitter from './Emitter';
const Cartproduct = () => {
  
     const [cartBucket, setCartBucket]= useState();
     
     useEffect(() =>{
      Emitter.on('addTobag', (newValue) => setCartBucket(newValue));
      console.log("EventListener::::::::", cartBucket)
  }, ['cartBucket']);
    
   
    console.log("EventListener::::::::", cartBucket)
  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        {/* <ImageData cartBucket={cartBucket}/>  */}
    </div>)
}

 // Emitter.on('addTobag', (newValue) => this.setState({ sidebar: newValue }));

export default Cartproduct