import React from 'react'
import UserAboutMe from '../UserAboutMe/UserAboutMe'
import UserInterests from '../UserInterests/UserInterests'
import UserOverview from '../UserOverview/UserOverview'

function UserAbout(props) {
  return (
    <section>
      <h3>Overview</h3>
      <UserOverview />

      <h3>Interests</h3>
      <UserInterests />

      <h3>About me</h3>
      <UserAboutMe />
    </section>
  )
}

export default UserAbout
