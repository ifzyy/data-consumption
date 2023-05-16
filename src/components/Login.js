import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'
import toast, { Toaster } from 'react-hot-toast'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import secureLocalStorage from 'react-secure-storage'
const Login = (props) => {
    const navigate = useNavigate()
    const details = secureLocalStorage.getItem("details")
    const memory = JSON.parse(details)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [showpassword, setShowPassword] = useState(false)

    const showPassword = () => { 
       if(showpassword){
        setShowPassword(false)
       }
       else{
        setShowPassword(true)
       }
    }
    
    const authenticate = (e) =>{
      e.preventDefault()
        if(memory[0].password === password && memory[0].email === email){
            props.setLoggedIn(true)
            sessionStorage.setItem("loggedIn", true)
            toast.success("You are logged in")
            navigate('/')
        }
        else {
            toast.error("wrong credentials")
        }
   
      
    }

    return (
        <div className='hero' style={{ backgroundImage: 'url("images/windmill.jpg")' }}>
            <div className="darker">
                <Toaster />
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={authenticate}>
                        <div className="user-box">
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                value={email} />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type={showpassword ? "text" : "password"}
                                onChange={(e) =>  setPassword(e.target.value) }
                                required value={password} />
                            <div>{showpassword ? <AiOutlineEyeInvisible onClick={showPassword} /> : <AiOutlineEye onClick={showPassword} /> }</div>
                        
                            <label>Password</label>
                        </div>
                        <button>
                            <span />
                            <span />
                            <span />
                            <span />
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Login
