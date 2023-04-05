
import HomeHeader from '../components/HomeHeader';
import Catogeries from '../components/Catogeries';
import ImageData from './ImageData';
import './Cartproduct.css'
import CartButton from './CartButton';

const Cartproduct = () => {

    const cartBucket = sessionStorage.getItem("keys");
    const addToBag = JSON.parse(cartBucket);
    console.log("SESSION::::::::OUT", addToBag)

  return (
    <div>
        <HomeHeader/>
        <Catogeries/>
        { ( addToBag === null) ?
          (<h1>cart is empty</h1>):
          <ImageData {...addToBag}/>         
         }
         <CartButton/>
    </div>)
}
export default Cartproduct;