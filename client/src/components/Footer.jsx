import { LocalAirport } from '@mui/icons-material'
import { House } from '@mui/icons-material'
import { SendAndArchive } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { ArrowUpwardTwoTone } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Send } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { ChatBubble } from '@mui/icons-material'
import React from 'react'
import img from "../images/logo gif.gif"
function Footer() {
  return (
    <div>
        <footer className='footer p-5 mt-5 text-small'>
       <div className="row">
           <div className='contact-footer  pt-3 col-md-4'><img src={img} alt="logo img"  className='logo-footer pb-3 '/>
           <h3 className='text-small pe-3'><House className=''/>561) 972-7813
19037, Florida(FL), 33469 </h3>
           <h3 className='text-small'><Phone className=''/> 01-7004271</h3>
           <h3 className='text-small'><Send className=''/> Delivex@union.fl</h3>
       </div>
       <div className="products col-md-4  pt-3">
    <h2>Products</h2>
    <a href="#"><h4 className="text-small card-text ">Delivex4individual</h4></a>
    <a href="#"><h4 className="text-small card-text">Delivex4business</h4></a>
       </div>
       <div className="products col-md-4 p-3">
     <h2>Resources</h2>
     <a href="#" ><h3 className='card-text text-small'>Privacy Policy</h3></a>
       <a href="#" ><h3 className='card-text text-small'>Terms and Conditions</h3></a>
       </div> 
       
       </div>
     <h6 className='text-center p-2 card-text'> &copy; DELIVEX</h6>
     
        </footer>
    </div>
  )
}

export default Footer