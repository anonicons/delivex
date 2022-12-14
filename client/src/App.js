import './App.css';
import {Routes, Route,HashRouter} from 'react-router-dom';
import Home from './pages/home';
import Nopage from './pages/nopage';

import Layout from './pages/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductDesc from './pages/productdue';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Trackpage from './pages/trackpage';
import {Provider, useDispatch, useSelector} from "react-redux"
import {store} from './store/index'
import { useEffect } from 'react';
import { authActions } from './store/authSlice';
import Payment from './pages/Payment';
import Bitcoin from './pages/Bitcoin';
import ProductDes from './pages/ProductDes';

function App() {

  const isLoggedIn = useSelector(st => st.isLoggedIn);
  const dispatch = useDispatch()

  // save & load login state
 
  useEffect(
    ()=>{
    if(localStorage.getItem('userid')){
        dispatch(authActions.login());
    }
    },[dispatch]
  )
  console.log(isLoggedIn)
  return (
    <div className="App">
      <HashRouter>
  <Routes>
<Route path='/' element={<Layout />} />
<Route index element={<Home />} />
<Route path='/nopage' element={<Nopage />} />
{/* <Route path='/products/' element={<Allproducts />} /> */}
<Route path='/track/products/:id' element={<ProductDes />} />
<Route path='/realm' element={<Login />} />
<Route path='/master' element={!isLoggedIn? <Nopage />:<Admin />} />
<Route path='/track' element={<Trackpage />} />
<Route path='/payment' element={<Payment />} />
<Route path='/payment/bitcoin' element={<Bitcoin />} />
  </Routes>
  </HashRouter>
    </div>
  );
}

export default App;
