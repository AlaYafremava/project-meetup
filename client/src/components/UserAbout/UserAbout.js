import React from 'react'
import UserAboutMe from '../UserAboutMe/UserAboutMe'
import UserInterests from '../UserInterests/UserInterests'
import UserOverview from '../UserOverview/UserOverview'

function UserAbout(props) {
  return (
    <section>
      <UserOverview />
      <UserInterests />
      <UserAboutMe />
    </section>
  )
}

export default UserAbout
