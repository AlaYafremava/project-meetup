import React from 'react'

function UserAboutMe({user}) {

  return (
    <div className="box">
      <p>
        {user.about ? user.about : 'No description listed'}
      </p>
    </div>
  )
}

export default UserAboutMe
