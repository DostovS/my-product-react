import React, { useState } from 'react';
import Header from "../Components/Header";
import Hero from '../Components/Hero';
import Sidebar from '../Components/Sidebar/index';
/* import {Routes, Route} from 'react-router-dom';
import Hero from '../Components/Hero';
import Product from '../Components/Product'; */
function Pages() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Header toggle={toggle}/>
      <Hero />
{/*       <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/product' element={<Product /> } />
      </Routes> */}
    </>
  );
}

export default Pages;