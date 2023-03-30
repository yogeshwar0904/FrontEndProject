import HomeHeader from '../components/HomeHeader';
import Catogeries from '../components/Catogeries';
import ImageData from './ImageData';
import './Cartproduct.css'

const Cartproduct = () => {

    const cartBucket = sessionStorage.getItem("keys");
    const addToBag = JSON.parse(cartBucket);
    console.log("SESSION::::::::OUT", addToBag)

  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        <ImageData {...addToBag}/>   
    </div>)
}
export default Cartproduct