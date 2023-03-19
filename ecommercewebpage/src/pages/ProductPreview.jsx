import React from 'react'
import { useLocation } from 'react-router-dom'
import "./ProductPreview.css"
export const ProductPreview = () => {
	const location = useLocation();
	const data = location.state;
	console.log("I'm in product preview",data)
  return (
    <div>
            <div className='container1'>
    <table >
				<tr>
					<th><span >Amount</span></th>
					<td><span  className='label-container'>{data.price}</span></td>
				</tr>
				<tr>
					<th><span>Product Size</span></th>
					<td><span  className='label-container'>{data.size}</span></td>
				</tr>
				<tr>
					<th><span >Delivery charge</span></th>
					<td><span  className='label-container'>Free</span></td>
				</tr>
        <tr>
					<th><span >Offer</span></th>
					<td><span className='label-container'>{data.offer}</span></td>
				</tr>
			</table>
    </div>
    </div>
  )
}
