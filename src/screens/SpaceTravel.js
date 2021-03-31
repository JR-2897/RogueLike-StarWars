import React, { useEffect } from 'react'
import Space from '../components/space'
import { accessAuthorize } from '../utils/funcAuthorize'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

// Ecran principal avec les fonctionnalités d'une partie.
const SpaceTravel = history => {
  const planetsList = useSelector(state => state.planetList.list)
  // useEffect(() => {
  //   accessAuthorize(history, 2)
  // }, [])
  return (
    <div>
      <Space planetsList={planetsList}></Space>
    </div>
  )
}
SpaceTravel.propTypes = {
  history: PropTypes.func
}

export default SpaceTravel
