import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeHeader from '../components/HomeHeader';
import Catogeries from '../components/Catogeries';
import ImageData from './ImageData';
import './Cartproduct.css'
const Cartproduct = (props) => {
    const location = useLocation();
    const data = location.state;
  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        {/* <ImageData {...data.productInfo}/> */}
    </div>)
}



export default Cartproduct