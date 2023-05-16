import React, {useState} from 'react'
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import '../styles/card.css.scss'
const Card = () => {
const details = JSON.parse(secureLocalStorage.getItem("details"))
const [temp,setTemp] = useState(0)
const [image,setImage] = useState("")

    axios.get(`http://api.weatherapi.com/v1/current.json?key=4a5963e9e7634126907205827230105&q=${details[0].location}`)
    .then(response =>{
        setTemp(response.data.current.temp_c)
        setImage(response.data.current.condition.icon)
    })
    .catch(e =>{ console.log(e);})

  return (
   
<div className="weather-wrapper">
          <div className="weather-card madrid">
              <div className="" />
              <img src={image} alt="" className='weather-icon sun' />
              <h1>{temp}º</h1>
              <p>{details[0].location}</p>
          </div>
      </div>
  )
}

export default Card
