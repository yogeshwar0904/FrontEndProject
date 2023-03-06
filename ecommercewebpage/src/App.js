import './App.css';
import {Routes,
        Route
      } from 'react-router-dom'
import Layout from './layouts/Layout';
import KidsOutfit from './pages/KidsOutfit';
import WomenOutfit from './pages/WomensOutfit';
import MenOutfit from './pages/MensOutfit';
import Image1outfit from './pages/Imageoutfit';
import { imageDetails } from './pages/ImageOutfitData';
import CustomerOrder from './pages/CustomerOrder';
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Layout />} exact/>
          <Route path="/womenoutfit" element={<WomenOutfit />}/>
          <Route path="/kidsfit" element={<KidsOutfit />}/>
          <Route path="/menoutfit" element={<MenOutfit />}/>
          <Route path="/image1outfit" element ={<Image1outfit obj={imageDetails}/>} />
          <Route path="/customerorder" element={<CustomerOrder/>}/>
       </Routes>
    </div>
  );
}

export default App;
