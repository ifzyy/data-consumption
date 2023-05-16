import React from 'react'
import Hero from './Hero';
import Main from './Main';
const Dashboard = (props) => {
    const{setlog} = props
  return (
    <div>
      <Hero setLoggedIn = {setlog} />
      <Main />
    </div>
  )
}

export default Dashboard
