import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeHeader from '../components/HomeHeader';
import Catogeries from '../components/Catogeries';
import ImageData from './ImageData';
import './Cartproduct.css'
const Cartproduct = (props) => {
    const location = useLocation();
    const values = location.state
    
    console.log("cartproduct", props.id)
  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
       
    </div>)
}



export default Cartproduct