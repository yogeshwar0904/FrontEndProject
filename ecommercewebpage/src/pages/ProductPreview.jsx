import React from 'react'
import "./ProductPreview.css"
export const ProductPreview = () => {
  return (
    <div>
            <div className='container1'>
    <table >
				<tr>
					<th><span >Amount</span></th>
					<td><span  className='label-container'>Rs.600</span></td>
				</tr>
				<tr>
					<th><span>Product Size</span></th>
					<td><span  className='label-container'>M</span></td>
				</tr>
				<tr>
					<th><span >Delivery charge</span></th>
					<td><span  className='label-container'>Free</span></td>
				</tr>
        <tr>
					<th><span >Offer</span></th>
					<td><span className='label-container'>50%</span></td>
				</tr>
			</table>
    </div>
    </div>
  )
}
