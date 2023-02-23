import React from 'react'
import Catogeries from './Catogeries'
import  './Home.css'

const Home = () => {
  return (
    <nav className='header'>
       <div className='nav'>
        <img src="" className= 'brand-logo'/>
           <div className='nav-items'>
              <div className='search'>
                 <input type ="text" className="search-box" placeholder ="search brand, product"/>
                 <button className='search-btn'>Search</button>
              </div>
              <a href="#"> <img src='img/user.png'/> </a>
              <a href="#"> <img src="img/cart.png" alt=""/></a>
           </div>
       </div>
       <Catogeries/>
    </nav>
  )
}

export default Home;