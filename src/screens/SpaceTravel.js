import React from 'react'
import Space from '../components/space'
import { useSelector } from 'react-redux'

// Ecran principal avec les fonctionnalités d'une partie.
const SpaceTravel = () => {
  const planetsList = useSelector(state => state.planetList.list)

  return (
    <div>
      <Space planetsList={planetsList}></Space>
    </div>
  )
}

export default SpaceTravel
