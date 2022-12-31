import React from 'react';
import Home from './Components/Home/Home';
import "./App.css"
import { Route, Routes } from 'react-router';
import Store from './Components/Store/Store';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
const App = () => {
  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Store></Store>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
};

export default App;