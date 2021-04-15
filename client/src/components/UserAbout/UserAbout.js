import React from 'react'
import UserAboutMe from '../UserAboutMe/UserAboutMe'
import UserInterests from '../UserInterests/UserInterests'
import UserOverview from '../UserOverview/UserOverview'

function UserAbout({ user, langs, tags }) {
  return (
    <section>
      <h3>Overview</h3>
      <UserOverview user={user} langs={langs} />

      <h3>Interests</h3>
      <UserInterests tags={tags}/>

      <h3>About</h3>
      <UserAboutMe user={user}/>
    </section>
  )
}

export default UserAbout
