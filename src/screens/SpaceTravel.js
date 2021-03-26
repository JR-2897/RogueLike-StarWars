import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePlanetList, getPlanetList } from '../actions/planetList'
import { resetProfile } from '../actions/profile'
import r from '../utils/random'

// Ecran principal avec les fonctionnalités d'une partie.
const SpaceTravel = () => {
  const dispatch = useDispatch()

  const planetsList = useSelector(state => state.planetList.list)
  // const currentPlanet = planetsList[r(planetsList.length - 1)]
  const nbVisitedPlanets = useSelector(state => state.profile.visitedPlanets)

  return (
    <div>
      <button
        onClick={() => {
          dispatch(resetProfile())
          console.log(nbVisitedPlanets)
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch(updatePlanetList(getPlanetList()))
          console.log(planetsList)
        }}
      >
        getPlanetList
      </button>
    </div>
  )
}

export default SpaceTravel
