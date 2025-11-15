import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {
  const [showLogin,setshowLogin]=useState(false)
  return (
    <div className='app'>
      {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        

      </Routes>
    </div>
  )
}

export default App