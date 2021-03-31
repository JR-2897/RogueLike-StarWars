import React, { useEffect } from 'react'
import EndGameComponent from '../components/endGameComponent'
import { accessAuthorize } from '../utils/funcAuthorize'
import PropTypes from 'prop-types'

// Ecran de fin de partie (victoire ou défaite)
const GameOver = ({ history }) => {
  // useEffect(() => {
  //   accessAuthorize(history, 3)
  // }, [])
  return <EndGameComponent />
}

GameOver.propTypes = {
  history: PropTypes.func
}

export default GameOver
