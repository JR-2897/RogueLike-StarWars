import React, { useEffect } from 'react'
import Player from '../components/player'
import { accessAuthorize } from '../utils/funcAuthorize'
import PropTypes from 'prop-types'

const Profile = ({ history }) => {
  useEffect(() => {
    accessAuthorize(history, 1)
  }, [])
  return (
    <div>
      <p>Profile</p>
      <Player></Player>
    </div>
  )
}
Profile.propTypes = {
  history: PropTypes.func
}

export default Profile
