import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setshowLogin }) => {
    const [currState, setcurrState] = useState("SignUp")
    return (
        <div className="login-popup">
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setshowLogin(false)} />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <>
                    </> : <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>{currState === 'SignUp' ? "Create Account" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continue to this you will agree to our terms and conditions</p>
                </div>
                {currState === "Login" ? <p>Create a new Account <span onClick={()=>setcurrState("SignUp")}>Click here</span></p> 
                : <p>Already have an Account? <span onClick={()=>setcurrState("Login")}>Login here</span></p>}



            </div>
        </div>
    )
}

export default LoginPopup