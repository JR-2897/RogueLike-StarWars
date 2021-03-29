import React, { useEffect } from 'react'
import Space from '../components/space'
import { accessAuthorize } from '../utils/funcAuthorize'
import PropTypes from 'prop-types'

// Ecran principal avec les fonctionnalités d'une partie.
const SpaceTravel = ({ history }) => {
  useEffect(() => {
    accessAuthorize(history, 2)
  }, [])
  return (
    <div>
      <Space></Space>
    </div>
  )
}
SpaceTravel.propTypes = {
  history: PropTypes.func
}

export default SpaceTravel
