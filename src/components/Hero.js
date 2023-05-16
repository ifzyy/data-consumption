import React, {useEffect} from 'react'
import Card from './Card'
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/hero.css'
import { handleLogout } from '../App';
const Hero = () => {

const details = JSON.parse(secureLocalStorage.getItem("details"))

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

   

    return (
        <div className='hero' style={{ backgroundImage: 'url("images/windmill.jpg")' }}>
            <div className="darker">
                <div className='hero_content'>
               <button className='button' onClick={handleLogout}>Sign out</button>
                    <h1 data-aos="zoom-in-left">Welcome back {details[0].username} </h1>
                    <p data-aos="zoom-in-right">Stay in touch with your data consumption and monitor which data is most optimal for usage at a given time.</p>
                </div>
                 
                <Card /></div>

        </div>
    )
}

export default Hero
