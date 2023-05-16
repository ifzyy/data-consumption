import React,{useState} from "react";
import validator from "validator";
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
const Signup = ( props ) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPassowrdConfirm] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")
const arr = [{
  username: username,
  password: password,
  email: email,
  location: location
}]
  const [showpassword, setShowPassword] = useState(false)

  const showPassword = () => {
    if (showpassword) {
      setShowPassword(false)
    }
    else {
      setShowPassword(true)
    }
  }

  const authenticate = (e) =>{
    e.preventDefault()
    if(password === passwordConfirm){
      if(validator.isEmail(email)){
        toast("You are logged in")
        sessionStorage.setItem("loggedIn", true)
        secureLocalStorage.setItem("details", JSON.stringify(arr))
        props.setLoggedIn(true)
        toast.success("welcome")
        navigate("/")
      }
      else{
        toast.error("Email is not valid")
      }
    }
    else{
      toast.error("Passwords do not match")
    }
  }
  return (
    <div>
      <Toaster />
      <div
        className="hero"
        style={{ backgroundImage: 'url("images/windmill.jpg")' }}
      >
        <div className="darker">
          <div className="login-box">
            <h2>Signup</h2>
            <form onSubmit={authenticate}>
              <div className="user-box">
                <input type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                   required />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  required />
                <label>location(state)</label>
              </div>

              <div className="user-box">
                <input  type={showpassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                   required />
                <div>{showpassword ? <AiOutlineEyeInvisible onClick={showPassword} /> : <AiOutlineEye onClick={showPassword} />}</div>
                <label>Password</label>
              </div>
              <div className="user-box">
                <input  type={showpassword ? "text" : "password"}
                  onChange={(e) => setPassowrdConfirm(e.target.value)}
                  value={passwordConfirm}
                   required />
                <div>{showpassword ? <AiOutlineEyeInvisible onClick={showPassword} /> : <AiOutlineEye onClick={showPassword} />}</div>
                <label>Password Confirmation</label>
              </div>
              <button>
                <span />
                <span />
                <span />
                <span />
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
