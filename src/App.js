import React, { useState } from 'react'
import Header from "./Components/Header";
import Banner from './Components/Banner';
import Experts from './Components/Experts'
import NewsLetter from './Components/NewsLetter';
import Plans from './Components/Plans';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {

  return (
    <div>
      
      <Header/>
      <Routes>
        <Route path="/" element = {<Banner/>}/>
        <Route path="/Resources" element = {<Experts/>}/>
        <Route path="/About" element = {<NewsLetter/>}/>
        <Route path="/Contact" element = {<Plans/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App