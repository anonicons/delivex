import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TrackCard() {
  const [input,setInput] = useState("")
  const navigate = useNavigate()

  const handleOnChange = (e) => {
      setInput(
        e.target.value
      )
  }

  const sendRequest = async ()=>{

    const res = await axios.post('http://localhost:8000/api/shipments/track',{trackcode:input}).catch(err => console.log(err))

    // get response
    const data = res.data
    return data
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    sendRequest().then(data => navigate(`/track/products/${data}`))
  }


  return (
    <div className='trackCard d-flex flex-column align-items-center py-5 px-3 w-100 rounded-2' id='track'>
        <div className="title-track fw-bold text-lg">
    Track Your Shipping
        </div>
        <p className='text-small'>* PLEASE TYPE IN YOUR TRACKING ID TO GET YOUR TRACKING LOCATION INFORMATION</p>
        <form action="" className='d-flex flex-column w-100' onSubmit={handleSubmit}>
            <input type="text"  placeholder='ENTER TRACK ID' className='p-2 my-2 track-input' value={input} onChange={handleOnChange}/> 
            <button className='border-0 p-2 my-2 btn btn-md btn-warning rounded-0' type='submit' >TRACK NOW</button>
        </form>
    </div>
  )
}

export default TrackCard