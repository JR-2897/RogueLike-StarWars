import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import CenterBlockSpace from '../centerBlockSpace'
import ProfileComponent from '../profileComponent'
import PlanetComponent from '../planetComponent'
import r from '../../utils/random'
import { verifEndGame } from '../../utils/funcScreens'
import { useHistory } from 'react-router-dom'

const Space = ({ planetsList }) => {
  const profileState = useSelector(state => state.profile.profile)
  const [fightAnimation, setFightAnimation] = useState('initial')
  const history = useHistory()
  const [hasLost, setHasLost] = useState(false)

  const [planet, setPlanet] = useState({
    name: 'Aleen Minor',
    img:
      'https://static.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg',
    faction: 'Rebel',
    garrison: 100,
    class: 1
  })
  const [isEnemy, setIsEnemy] = useState(false)
  useEffect(() => {
    const currentPlanet = planetsList[r(planetsList.length - 1)]
    console.log('currentPlanet', currentPlanet)
    if (currentPlanet) {
      setPlanet(currentPlanet)
      setIsEnemy(currentPlanet.faction !== profileState.faction)
      verifEndGame(profileState?.visitedPlanets, history, hasLost)
    }
  }, [profileState.visitedPlanets])
  return (
    <SpaceDiv>
      <ProfileComponent
        profileState={profileState}
        fightAnimation={fightAnimation}
      ></ProfileComponent>
      <CenterBlockSpace
        isEnemy={isEnemy}
        visitedPlanets={profileState.visitedPlanets}
        fightAnimation={fightAnimation}
        setFightAnimation={setFightAnimation}
        profile={profileState}
        setHasLost={setHasLost}
        currentPlanet={planet}
      ></CenterBlockSpace>
      <PlanetComponent planet={planet}></PlanetComponent>
    </SpaceDiv>
  )
}

const SpaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  align-items: center;
  justify-content: center;
`
Space.propTypes = {
  planetsList: PropTypes.array
}

export default Space
