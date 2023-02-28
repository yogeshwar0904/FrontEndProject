import React from 'react'
import  './Catogeries.css'
import { BrowserRouter as Router, Routes, 
  Route,
  Link
} from 'react-router-dom';
import WomenAccessories from './WomenAccessories'

const Catogeries = () => {
  return (
    <div>
      <Router>
        <Link to = "/WomenAccessories">Women</Link>
         <Routes>
          <Route path = "/WomenAccessories" element ={<WomenAccessories/>}/>
         </Routes>
       </Router>
     </div>
    
  )
}
export default Catogeries;