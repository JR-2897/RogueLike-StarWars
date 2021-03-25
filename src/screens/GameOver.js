import React from 'react'
import GameLost from '../components/GameLost'
import GameWon from '../components/GameWon'

// Ecran de fin de partie (victoire ou défaite)
const GameOver = boolWin => {
  const render = boolWin ? <GameWon /> : <GameLost />
  return { render }
}

export default GameOver
