import React from 'react'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import { TiWeatherCloudy } from 'react-icons/ti'
import { GiPowerGenerator } from 'react-icons/gi'
import '../styles/main.css' 
const Main = () => {
  return (
    <div className='main'>
      <div className='main_one'>
        <div className='main_one_content_one'>
        </div>
        <div className='main_one_content_two'></div>
      </div>

      <div className='main_two'>
        <div style={{backgroundImage: "url('/images/energy.jpg')",backgroundSize: "cover"}}><div className='main_two_content_one'><div><MdEnergySavingsLeaf /></div> Expected Energy consumption</div></div>
        <div style={{ backgroundImage: "url('/images/cloud.jpg')", backgroundSize: "cover" }}><div className='main_two_content_two'><div><TiWeatherCloudy /></div> Expected weather condition</div> </div>
        <div style={{ backgroundImage: "url('/images/generator.jpg')", backgroundSize: "cover" }}>        <div className='main_two_content_three'><div><GiPowerGenerator /></div>Quick solution</div></div>
      </div>
    </div>
  )
}

export default Main
