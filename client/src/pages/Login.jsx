import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice'

function Login() {
  const [inputs,setInputs] = useState({username:"",password:""})
  // const [message,setMessage] = useState()
  const [error,setError] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const sendRequest = async ()=>{
    const res = await axios.post('/api/users/login',{
      username:inputs.username,
      password:inputs.password
    }).catch(
      err => {
        setError(true)
        console.log(err);}
      )

    // get response
    const data = await res.data
    return data ;
  }

  const handleChange = (e) => {
     setInputs(prev =>({
      ...prev,[e.target.name]:e.target.value
     }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    sendRequest().then((data) => localStorage.setItem('userid',data)).then((data) => navigate('/master')).then(()=>dispatch(authActions.login())).then(
      () => console.log("login successful")
    )
  }

  return (
    <div className='login d-flex flex-column align-items-center justify-content-center fonta'>
        <form action="" className='w-100 form-login d-flex flex-column align-items-center justify-content-center text-primary gap-2  p-5 rounded max300 ' onSubmit={handleSubmit}>
     <h2 className='fw-bold'>Admin</h2>
     <p className='text-blacked'>Master, please provide your details to proceed. </p>
    {error && <p className='text-small text-danger my-2'>Invalid Credentials, try again.</p>}
     <input type="text" name="username" id="login" placeholder='Username' className='p-3 input rounded border border-0 my-2' value={inputs.username} onChange={handleChange} />
     <input type="password" name="password" id="password" placeholder='Password' className='p-3 input  rounded border border-0 my-2' value={inputs.password} onChange={handleChange} />
     <button className='w-100 border-0 btn btn-primary text-white p-3 my-2`'  type='submit' >Login</button>
        </form>
        </div>
  )
}

export default Login