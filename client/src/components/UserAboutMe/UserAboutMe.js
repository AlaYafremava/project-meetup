import React from 'react'

function UserAboutMe({ user }) {
  return (
    <>
      {user.about ? (
        <div className="box">
          <p>{user.about && user.about}</p>
        </div>
      ) : (
        <p>Put some information about yourself...</p>
      )}
      <div>
        <p>{user.about && user.about}</p>
      </div>
    </>
  )
}

export default UserAboutMe
