import React,{useLayoutEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import  toast,{Toaster} from 'react-hot-toast'



  export const handleLogout = () => {
    sessionStorage.clear()
    window.location.reload()
   toast.success("you are logged out")
  }

function App() {

  const [loggedIn, setLoggedIn] = useState(false)


  const checkLoggedIn = () =>{
    const loggedon = sessionStorage.getItem("loggedIn")

    if (loggedon) {
      setLoggedIn(true)
   
    }
    else{
      setLoggedIn(false)
    }
  }



  useLayoutEffect(()=>{
  checkLoggedIn()
  },[])

if(loggedIn){
  return (
  
    <div className="App">
      
      <Toaster />
      <Dashboard />
    </div>
  );
}

else{
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedIn ? <Dashboard/> : <Auth />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}
}

export default App;
