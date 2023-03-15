import React from 'react'
import './HomeFooter.css'
export const HomeFooter = (props) => {
    return(
       <footer>
       <div className="footer-content">
       <img src="img/light-logo.png" className="logo" alt=""/>
       <div className="footer-ul-container">
        <ul className="category">
        <li className="category-title">Men</li>
           {props.clothItems.map(items =>{
              return(
                <li key={items.id} className="footer-link">{items.outfit}</li>
              )})}
        </ul>
        <ul className="category">
        <li className="category-title">Women</li>
           {props.clothItems.map(items =>{
              return(
                <li key={items.id} className="footer-link">{items.outfit}</li>
            )})}
        </ul>
       </div>
       </div>
       </footer>
    )}

