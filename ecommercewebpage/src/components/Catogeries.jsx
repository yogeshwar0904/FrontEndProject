import React from 'react'
import  './Catogeries.css'
import {Link} from 'react-router-dom';

const Catogeries = () => {
  return (
    <div >
       <ul className="links-container">
          <li className="link-item">
          <Link to="/" className="link"> Home</Link>
          </li>
          <li className="link-item">
          <Link to="/womenoutfit" className="link"> Women</Link>
          </li>
          <li className="link-item">
          <Link to="/menoutfit" className="link"> Men</Link>
          </li>
          <li className="link-item">
          <Link to="/kidsoutfit" className="link"> Kids</Link>
          </li>
          <li className="link-item">
          <Link to="/" className="link"> Accessories</Link>
          </li>
        </ul>
    </div>
  )
}
export default Catogeries;
