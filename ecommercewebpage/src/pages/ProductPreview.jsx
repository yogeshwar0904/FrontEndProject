import React from 'react'
import { useLocation } from 'react-router-dom'
import "./ProductPreview.css"
export const ProductPreview = () => {
	const location = useLocation();
	const data = location.state;
	console.log("I'm in product preview",data.offer)
    // console.log(discountCalculation())
	// function discountCalculation(){
	// 		let price = data.actualPrice;
	// 		let offerPrice = data.price;
	// 		const savingPrice = price -offerPrice;
	// 		return savingPrice;
	
	// } 
  return (
    <div>
            <div className='container1'>
				<h3 className='heading'>PRICE DETAILS</h3>
				<div className='row-table'>
				<div className='row-one-group'>
					<div className='row-one-table'>
						<div className='row-one-body'>Price(1 item)</div>
						<div className='row-one-body '>{data.productInfo.price}</div>
					</div>
				    </div>
					<div className='row-one-group '>
					<div className='row-one-table '>
						<div className='row-two-body '>Product Id</div>
						<div className='row-two-body '>Id1324</div>
					</div>
				    </div>
					<div className='row-one-group '>
					<div className='row-one-table '>
						<div className='row-three-body '>Payment Mode</div>
						<div className='row-three-body'>Cash on delivery</div>
					
					</div>	
				    </div>
					<div className='row-one-group '>
					<div className='row-one-table '>
					<div className='row-four-body '>Delivery charge</div>
						<div className='row-four-body color'>Free</div>
					</div>	
				    </div>

					<div className='row-one-group '>
					<div className='row-one-table '>
						<div className='row-five-body '>Total payable</div>
						<div className='row-five-body'>{data.productInfo.price}</div>
					</div>	
				    </div>
				</div>

				
				
	        </div>
			<div>
				<h1>hii</h1>
			</div>
    </div>
  )
}
