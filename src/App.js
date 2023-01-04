import React from 'react';
import Home from './Components/Home/Home';
import "./App.css"
import { Route, Routes } from 'react-router';
import Store from './Components/Store/Store';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import AdminSignup from './Components/AdminSignup/AdminSignup';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import SomethingWrong from './Components/AdminSignup/SignupError';
import LoginError from './Components/AdminLogin/LoginError';
import AdminHome from './Components/AdminHome/AdminHome';
const App = () => {
  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Store></Store>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/adminsignup' element={<AdminSignup></AdminSignup>}></Route>
        <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/signuperror' element={<SomethingWrong></SomethingWrong>}></Route>
        <Route path='/loginerror' element={<LoginError></LoginError>}></Route>
        <Route path='/adminhome' element={<AdminHome></AdminHome>}></Route>
      </Routes>
    </div>
  );
};

export default App;