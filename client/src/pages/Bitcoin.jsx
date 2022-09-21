import React from 'react'

function Bitcoin() {
  return (
    <div>
         <div className='trackPage position-relative fonta pt-5'>
      <div style={{minWidth:"300px"}} className="mx-auto shadow-max bg-white p-3" >
        <h4 className='title-track fw-bold text-center text-black h3'>Payment Methods</h4>

        <div className='p-1 pt-3 '>
            Package: <span className='fw-bold'>(Micro dosing capsules 0.05g (Golden teacher) x50)</span> <br />
            Total Amount: <span className='fw-bold'>$100</span>
        </div>
        <div>
        <p className='text-blacked p-1  text-secondary'> <span className='fw-bold text-black'>Note:</span>  Availabilty of payment methods is determined by the type of the shipment and the package shipped. This is to ensure save, private and secured shipment process. </p>
        </div>
        <div className='row justify-content-center align-items-center gap-5 mt-5 '>
       <div className='paypal p-5 paypal text-primary text-md border shadow-lg col-md-3 opacity-50'>
        <span className=''>Paypal</span> <br />
        <button className='btn btn-warning btn-md mt-2 cursor-none'>Proceed with paypal</button>
        <div className='text-end text-blacked'>
           - disabled
        </div>
       </div>
       <div className='btc text-warning p-5 text-md border shadow-lg col-md-3 '>
       
       <span>BTC</span>
       <br />
       <button className='btn btn-warning btn-md mt-2'>Proceed with bitcoin</button>
       </div>
       <div className='cashapp text-success p-5 text-md border shadow-lg col-md-3 opacity-50'>
       $Cashapp<br />
       <button className='btn btn-warning btn-md mt-2'>Proceed with cashapp</button>
       <div className='text-end text-blacked'>
           - disabled
        </div>
       </div>
       
       <div className='bank p-5 text-md text-secondary border shadow-lg col-md-3 opacity-50'>
       <span>Bank</span>
       <br />
       <button className='btn btn-warning btn-md mt-2'>Proceed with bank methods</button> <br />
       <PaymentOutlined  className='text-danger'/>
       <PaymentOutlined  className='text-danger'/>
       <PaymentOutlined  className='text-danger'/>
       <PaymentOutlined  className='text-danger'/>
       <div className='text-end text-blacked'>
           - disabled
        </div>
       </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Bitcoin