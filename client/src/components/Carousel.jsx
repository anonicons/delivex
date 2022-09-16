import React from 'react'
import SecurityIcon from '@mui/icons-material/Security';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DiamondIcon from '@mui/icons-material/Diamond';
import { icon } from '@fortawesome/fontawesome-svg-core';

function Carousell() {
const whyus = [
{id:1,
icon: <DiamondIcon fontSize='large' sx={{fontSize :"40px"} }  className="text-primary" />,
Tile:"Instant Loan",
text:"Apply in 5mins and get alerted instantly if you qualify."
},
{id:2,
icon: <SecurityIcon fontSize='large' sx={{fontSize :"40px"}} className="text-primary" />,
Tile:"Fully Secured",
text:"Our platforms are PCIDSS compliant to ensure optimum security of your data electronically."
},
{id:3,
icon: <CloudDownloadIcon fontSize='large' sx={{fontSize :"40px"}} 
className="text-primary"/>,
Tile:"Easy to Use",
text:"Our platform is built for you. It is seamless and easy to navigate."
},
]
  return (
    <section class="p-5">
    <div class="container-fluid mt-3 mb-3">
      <div class="slider text-center  row">
       {whyus.map(ele=>{
                 return(<div class="col-md-4 ">
               <div class="mycard text-dark mb-3 pb-3" >
         <div class="card-body text-center mb-3 mt-2" >
           <div key={ele.id.toString()} class="h1 mb-3" >
            {ele.icon}
           </div>
           <div key={ele.id.toString()} class="card-title mb-3 ">
             {ele.Tile}
           </div>
           <p key={ele.id.toString()} class="card-text ps-2 pe-2">
           {ele.text}
           </p>
         </div>
       </div> </div>)
            })}
            {/* absolute buttons */}

         </div>
       </div>
      
    
  </section>
  )
}
export default Carousell;
