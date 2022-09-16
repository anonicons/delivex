import React from 'react'
import {BrowserRouter,Route,Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from "./images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ly-nav">
    <div className="container">
      <a className="navbar-brand" href="#"><img src={img} alt="logo" className='logo'/></a>
      <button className="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex ">
          <li className="nav-item ">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/track">Track Now</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Feedback</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar