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
import BookingMessage from './pages/BookingMessage';
import Imageoutfit from './pages/Imageoutfit';
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
          <Route path='/bookingmessage' element={<BookingMessage/>}/>
       </Routes>
    </div>
  );
}

export default App;
