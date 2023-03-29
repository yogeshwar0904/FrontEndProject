import './App.css';
import {Routes,
        Route
      } from 'react-router-dom'
import Layout from './layouts/Layout';
import KidsOutfit from './pages/KidsOutfit';
import WomenOutfit from './pages/WomensOutfit';
import MenOutfit from './pages/MensOutfit';

import { imageDetails } from './pages/ProductSize';
import CustomerOrder from './pages/CustomerOrder';
import Cartproduct from './pages/Cartproduct';
import Imageoutfit from './pages/Imageoutfit';
import OrderDelivery from './pages/OrderDelivery';
import ShippingUserProduct from './pages/ShippingUserProduct';
import PaymentPage from './pages/PaymentPage';

const cartArrays = [1,2,3];
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Layout />} exact/>
          <Route path="/womenoutfit" element={<WomenOutfit />}/>
          <Route path="/kidsfit" element={<KidsOutfit />}/>
          <Route path="/menoutfit" element={<MenOutfit />}/>
          <Route path="/imageoutfit" element ={<Imageoutfit obj={imageDetails}/>} />
          <Route path="/customerorder" element={<CustomerOrder/>}/>
          <Route path="/cartproduct" element={<Cartproduct/>}/>
          <Route path='/paymentpage' element={<PaymentPage/>}/>
          <Route path='/orderdelivery' element={<OrderDelivery/>}/>
          <Route path='/shippinguserproduct' element={<ShippingUserProduct/>}/>
       </Routes>
    </div>
  );
}

export default App;
