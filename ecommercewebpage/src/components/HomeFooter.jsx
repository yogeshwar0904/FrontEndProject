import React from 'react'
import './HomeFooter.css'
export const HomeFooter = (props) => {
    return(
       <footer>
       <div class="footer-content">
       <img src="img/light-logo.png" class="logo" alt=""/>
       <div class="footer-ul-container">
        <ul class="category">
        <li class="category-title">Men</li>
           {props.obj.map(items =>{
              return(
                <li class="footer-link">{items.outfit}</li>
              )})}
        </ul>
        <ul class="category">
        <li class="category-title">Women</li>
           {props.obj.map(items =>{
              return(
                <li class="footer-link">{items.outfit}</li>
            )})}
        </ul>
       </div>
       </div>
       </footer>
    )}

