import React from 'react'
import AsideTrack from '../components/AsideTrack'
import Comment from '../components/comment'
import Footer from '../components/Footer'

import Provision from '../components/Provision'
import Provisionaside from '../components/Provisionaside'
import Showcase from '../components/showcase'
import TrackCard from '../components/TrackCard'

import "../index.css"
import Navbar from '../Navbar'
import img from '../images/scoot.png'
import Whyus from '../components/Whyus'
function Home() {
  return (
    <div className='fonta'>
      
      <div className="section1-home">
      <Navbar />
         <Showcase title={"WORLD FASTEST SECURE DELIVERY SERVICE"} parag={""} />
      </div>
      <div className="track container my-5 row mx-auto align-items-center">
        <div className="col-md-6 my-2">
        <TrackCard />
        </div>
        <div className="col-md-6 my-2">
        <AsideTrack />
        </div>
      </div>
      <div className="track container mt-5 row mx-auto align-items-center">
        <div className="col-md-6">
           <Provisionaside />
        </div>
        <div className="col-md-6">
           <Provision />
        </div>
      </div>
      <div className="image container row">
        <div className="col-12 col-md-6">
      <img src={img} alt="delivery man" className='img-fluid mx-auto  w-100' /></div>
        
      </div>
      <div className="whychooseourservice">
        <Whyus />
      </div>
      <div className="section4">
        <Comment />
      </div>
      <div className="section5 mt-5">
        <Footer />
      </div>
    </div>
  )
}

export default Home