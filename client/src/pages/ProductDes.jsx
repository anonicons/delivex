import { ArrowBack, ArrowBackIosNewSharp, ArrowForward, ArrowForwardIos, HomeOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDes() {
    const [shipment,setShipment] = useState({})
    const navigate = useNavigate()
    const id = useParams().id
    const fetchShipment = async () => {
        const res = await axios.get(`/api/shipments/${id}`).catch(err => console.log(err))


        // get response data
        const data = await res.data
        return data
    }

    // get shipment on render
useEffect(
    () => {fetchShipment().then((data) => setShipment(data)).catch(err=>console.log(err))},[]
 )
  return (
    <div className='product-details d-flex flex-column align-items-center justify-content-center fonta' >
        <div className=' px-3 h5 text-secondary'>
        Package Estimated Arrival Time:<span className='fw-bold text-black
        '> 12day(s)</span> 
        </div>
        
    <h3 className='text-blacked client-mssg'>Dear {shipment.client}, here is the summary of your shipment</h3>

        <div className="trackCard d-flex flex-column align-items-center justify-content-center border-2 border-dark position-relative p-5 rounded shadow-max">
        <div className="mb-3 text-center"> <div className="text-small text-secondary">Track ID:</div>
        <div className="track-number title-track fw-bold">
            {shipment.trackcode}
        </div></div>
     
        <div className="origin text-center">
            <p className=' m-0 '>Origin destination</p>
            <p className='text-secondary m-0'>{shipment.origin}</p>
        </div>
        <div className="title-track fw-bold text-warning"> <ArrowForward />
        </div>
       <div className="title-track fw-bold text-warning"><ArrowBack /></div>
        
        <div className="final pt-4 text-center">
        <p className='m-0'>Final destination</p>
            <p className='text-secondary m-0'>{shipment.final}</p>
        </div>

        <div className='text-center my-3'>
            <div className="goods title-track fw-bold ">Package</div>
            <p className='text-danger'>{shipment.products}</p>
        </div>
    
    <button className='border-0 position-absolute goback-btn btn btn-lg  btn-warning' onClick={()=>navigate("/")}><HomeOutlined /></button>

        </div>
       
    </div>
  )
}

export default ProductDes;