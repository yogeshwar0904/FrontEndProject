import React from 'react'
import  './HomeProfile.css'

const HomeProfile = () => {
  return (
    <header data-testid='Home-Profile' className="hero-section">
       <div className="content">
           <img src="img/light-logo.png" className="logo"/>
           <p className="sub-heading">best fashion collection of all time</p>
       </div>
    </header>
  )
}

export default HomeProfile