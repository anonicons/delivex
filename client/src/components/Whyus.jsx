import React from 'react'

import air from '../images/air.jpg'
import land from '../images/land.jpg'
import warehouse from '../images/warehouse.jpg'

function Whyus() {
  return (
    <div className='p-5 whyus' id='whyus'>
        <div className="title-track fw-bold text-center p-3 text-white">
            WHY CHOOSE DELIVEX
        </div>
        <p className=' py-3 '>
            WITH A CUSTOMER FOCUSED BUSINESS MODEL. WE OFFER GREAT SUPPORT AND PRICES FOR ALL TYPES OF ENTREPRENEURS AND BUSINESSSES.
        </p>
        <div className="whyus-cards row  align-items-center text-end mx-auto">
       <div className="col-md-4 my-5">
        <img src={air} alt="air freight"  className='image-fluid abeg mx-auto'/>
          <h3 className='mt-4'>Air Freihgt</h3>
          <p className='text-small text-white'>We provide an integrated network of air and ground transport options that give you the widest range of the air cargo choices - all without to make multiple calls to find the best rates.</p>
       </div>
       <div className="col-md-3 my-5">
        <img src={land} alt="road freight" className='image-fluid abeg mx-auto' />
          <h3 className='mt-4'>Road Freihgt</h3>
          <p className='text-small text-white'>Road freight is freight carried by trucks on the road network. The services are fast, reliable and cost effective.</p>
       </div>
       <div className="col-md-4 my-5">
             <img src={warehouse} alt="warehouse" className='image-fluid abeg mx-auto' /> 
              <h3 className='mt-4'>WAREHOUSE</h3>
              <p className='text-small text-white'>We offer warehouses at different locations in the outside United State for storing of goods and package. Contact support to inquire and rent any of our warehouses.</p>
          </div>
          </div>
          </div>
    
  )
}

export default Whyus