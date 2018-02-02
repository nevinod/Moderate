import React from 'react'
import { Link } from 'react-router-dom'


export default ({ currentUser, signOut }) => {

  if(currentUser) {
    return (
        <div className="article-index-temp">
          <h1>This is the articles show page when logged in</h1>
        </div>
    )

  } else {
    return (

      <div className="article-index-temp">
        <h1>This is the articles show page when not logged in</h1>
      </div>
    )
  }

}
