import React from 'react'
import TrackCard from '../components/TrackCard'
import Navbar from '../Navbar'

function Trackpage() {
  return (
    <div className='trackPage position-relative fonta pt-5'>
      <div style={{maxWidth:"300px"}} className="mx-auto shadow-max " >
         <TrackCard />
      </div>
    </div>
  )
}

export default Trackpage