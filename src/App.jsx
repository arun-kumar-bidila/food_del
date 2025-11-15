import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <></>}
      <div className='app'>

        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart/>}/>


        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App