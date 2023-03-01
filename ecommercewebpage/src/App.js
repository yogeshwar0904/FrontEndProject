import './App.css';
import {Routes,
        Route
      } from 'react-router-dom'
import Layout from './layouts/Layout';
import KidsOutfit from './pages/KidsOutfit';
import WomenOutfit from './pages/WomensOutfit';
import MenOutfit from './pages/MensOutfit';
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Layout />} exact />
          <Route path="/womenoutfit" element={<WomenOutfit />}/>
          <Route path="/kidsfit" element={<KidsOutfit />}/>
          <Route path="/menoutfit" element={<MenOutfit />}/>
       </Routes>
    </div>
  );
}

export default App;
