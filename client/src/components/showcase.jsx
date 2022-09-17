import { EmailOutlined, LockClock, Timer, TimerOutlined } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import "../index.css"
import Bubbles from './Bubbles';
function Showcase({title,parag}) {
  // burst event based actions
const burst = (e)=>{
  e.target.style.width = "10" + "px";
  e.target.style.height = "10" + "px"
}

const navigate = useNavigate()
  return (
    <div className='showcase container-fluid text-white ps-2 pb-5 w-100 pt-1'>
      <div className='pb-5 text-end text-white'>
        <div className="text-xsm"><EmailOutlined size="small" className='text-warning'/> delivaexpress@yahoo.com</div>
      
        <div className='text-xsm'>
          <TimerOutlined size="small" className='text-warning' /> 10.00 - 6.00 Pm
        </div>
      </div>

<div className="row pt-2 container">
    <div className="col-md-12 w-100 justify-content-center ">
        <h1 className='showcase-header '>
            {title}
        </h1>
        <hr />
           <button className='btn btn-outline border-0 rounded-0 btn-warning btn-md rounded-0 text-white' onClick={()=>navigate('/track')}>TRACK SHIPMENT</button>
    </div>
</div>

{/* absolute items (bubbles) */}

{/* control bubbles */}
<Bubbles burst = {burst}/>
    </div>
  )
}

export default Showcase