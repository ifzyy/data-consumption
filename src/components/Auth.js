import React from 'react'
import '../styles/auth.css'
const Auth = () => {
  return (
    <div className='hero' style={{ backgroundImage: 'url("images/windmill.jpg")' }}>
      <div className="darker-auth">
        <div className='home'>
          <h1>Welcome</h1>
          <div className='actions'>
            <a href="/login">login</a>
            <a href="/signup">signup</a>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Auth
