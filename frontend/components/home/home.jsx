import React from 'react'
import { Link } from 'react-router-dom'




export default ({ currentUser, signOut }) => {

  if(currentUser) {
    return (
      <div>
        <button className="sign-out-button" onClick={signOut}>Sign Out</button>
      </div>
    )

  } else {
    return (


      <div className="home">
        <div className="all-header-elements">
          <h1 className="web-title">Moderate</h1>
          <div className="home-page-buttons">
            <Link className="home-login-button" to='/login'>Sign In</Link>
            <Link className="home-signup-button" to='/signup'>Get started</Link>
          </div>
        </div>

      </div>
    )

  }


}
