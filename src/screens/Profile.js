import React, { useEffect } from 'react'
import Player from '../components/player'
import { accessAuthorize } from '../utils/funcAuthorize'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Profile = ({ history }) => {
  const rebelList = useSelector(state => state.starshipList.RebelList)
  const empireList = useSelector(state => state.starshipList.EmpireList)
  useEffect(() => {
    accessAuthorize(history, 1)
  }, [])
  return (
    <div>
      <p>Profile</p>
      <Player rebelList={rebelList} empireList={empireList}></Player>
    </div>
  )
}
Profile.propTypes = {
  history: PropTypes.func
}

export default Profile
