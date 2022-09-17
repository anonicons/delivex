import { Delete } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../store/authSlice'


function Admin() {

   const initialState = {trackcode: "",client: "" ,products: "",origin: "",final: ""}

   const [shipments,setShipments] = useState([])
   const [inputs,setInputs] = useState(initialState)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const fetchShipments = async () =>{
   const res = await axios.get('/api/shipments/').catch( err => console.log(err))

   const data = await res.data
   return data
}
// get shipments on render
useEffect(
   () => {fetchShipments().then((data) => setShipments(data)).catch(err=>console.log(err))},[]
)

const isLoggedIn = useSelector(st => st.isLoggedIn)

// send request
const sendRequest = async () => {
   const res = await axios.post('/api/shipments/add',{
      trackcode: inputs.trackcode,
      client: inputs.client,
      products: inputs.products,
      origin: inputs.origin,
      final: inputs.final
   }).catch(err => console.log(err))

   // get response
   const data = res.data
   return data
}

// handle change
const handleChange = (e) => {
   setInputs(prev =>({
    ...prev,[e.target.name]:e.target.value
   }))
}

const handleSubmit = (e) => {

   e.preventDefault()
   sendRequest().then((data) => setShipments(data))

   setInputs(initialState)
   
}
const handleLogout = () =>{
   dispatch(authActions.logout())
   navigate('/realm')

}
// Delete shipment request 
const deleteRequest = async (id) => {
   const res = await axios.delete(`/api/shipments/${id}`).catch(err=>console.log(err))

   // response data
   const data = await res.data
   return data
}

const handleDelete  = (id) =>{
   deleteRequest(id)
   const remaining = shipments.filter(s=> s._id !== id)

    setShipments(remaining);
}

  return (
   <div>
      <button className='btn btn-md btn-danger border-0 rounded-0' onClick={handleLogout}>logout</button>
     <div className='admin d-flex justify-content-center gap-5 container'>
        <main classname="basis-2/5">
            <form action="" className='d-flex flex-column justify-content-center align-items-center gap-2 mt-5 w-100 fonta' onSubmit={handleSubmit}>
              <h5 className='text-danger p-1 bg-white text-center rounded'>Fill in the details carefully, master</h5>
                <input type="text" name='trackcode' className='p-1 w-100' onChange={handleChange} value={inputs.trackcode}  placeholder='Track number'/>
                <input type="text" name='client' className='p-1 w-100' onChange={handleChange} value={inputs.client} placeholder="client's name" />
                <input type="text" name='products' className='p-1 w-100' onChange={handleChange} value={inputs.products} placeholder='products' />
                <input type="text" name='origin' className='p-1 w-100' onChange={handleChange} value={inputs.origin} placeholder='destination origin'/>
                <input type="text" name='final' className='p-1 w-100' onChange={handleChange} value={inputs.final} placeholder='destination final' />
                <button className='border-0 p-1 w-100 btn btn-lg btn-warning rounded-0 fw-bold' type='submit'>Add</button>
            </form>
        </main>
        <aside className=' admin-aside mt-4  text-danger basis-3/5 w-100 p-2 bg-black'>
            <h5 className=' text-center text-decoration-underline'>Created Carts</h5>
           
               {
                  !shipments? <div className='text-danger'>
                     "No shipments records"
                  </div> :shipments.map(shipment => 
                     <div className="trackcard m-4 border border-1 border-black text-center p-2 shadow-sm ">
                            <div className="tracknum">
            Track ID:{shipment.trackcode}
         </div>
         <hr />
         <div className="clientname">Client's name:{shipment.client}</div>
         <hr />
         <div className="products">product:{shipment.products}</div>
         <hr />
         <div className="origin">origin country:{shipment.origin}</div>
         <hr />
         <div className="final">final country:{shipment.final}</div>
         <hr />
         <div onClick={()=>handleDelete(shipment._id)} className='pointer'>
         <Delete /><br />
         Delete
         </div>
            </div>
            
                     )}
        </aside>
        </div>
   </div>
  )
}

export default Admin