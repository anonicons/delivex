import React from 'react'

function Bitcoin() {
  return (
    <div>
         <div className='trackPage position-relative fonta pt-5'>
      <div style={{minWidth:"300px"}} className="mx-auto shadow-max bg-white p-3 flex flex-col align-items-center container" >
        <h4 className='title-track fw-bold text-center text-black h3'>Payment Method:Bitcoin</h4>
        <img src="https://bitcoin.org/img/icons/logotop.svg?1662473327" alt="btc" width={300} height={200} />
        <div className='border rounded-2 p-2 '>
         <div>
           Total Amount: <span className='fw-bold'>$80</span>
         </div>
          <div className='my-3 address'>Address:<span className='fw-bold'>bc1qvtv43rlavzrq3ulzptxrn3x79mtxn52x6y5wcm</span></div>
          <div className='small-text'>Kindly copy the above address to make payments</div>
        </div>
      
      <button className='btn btn-sm btn-warning mt-5 opacity-50'>Payment confirmed</button>
      <div className='small-text mb-5 pt-1'>Automatic confirmation system. <span className='text-decoration-underline cursor-pointer'>know more</span> </div>
      </div>
      </div>
    </div>
  )
}

export default Bitcoin