
import HomeHeader from '../components/HomeHeader';
import Catogeries from '../components/Catogeries';
import ImageData from './ImageData';
import './Cartproduct.css'
import CartButton from './CartButton';
import { ProductPreview } from './ProductPreview'
import { HomeFooter } from '../components/HomeFooter';
import { mensOutfit } from '../components/OutfitData'
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
         <div className='footer-cart-page'>
          <HomeFooter clothItems = {mensOutfit}/>
        </div>
    </div>)
}
export default Cartproduct;