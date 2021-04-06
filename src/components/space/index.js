import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

import CenterBlockSpace from '../centerBlockSpace'
import ProfileComponent from '../profileComponent'
import PlanetComponent from '../planetComponent'
import { useHistory } from 'react-router-dom'
import { chosePlanet, defaultPlanet } from '../../utils/funcPlanet'
import { verifEndGame } from '../../utils/funcScreens'

const Space = ({ planetsList }) => {
  const profileState = useSelector(state => state.profile.profile)
  const [fightAnimation, setFightAnimation] = useState('initial')
  const history = useHistory()
  const [hasLost, setHasLost] = useState(false)

  const [planet, setPlanet] = useState(defaultPlanet)
  const [isEnemy, setIsEnemy] = useState(false)
  useEffect(() => {
    const currentPlanet = chosePlanet(planetsList)
    if (currentPlanet) {
      setPlanet(currentPlanet)
      setIsEnemy(currentPlanet.faction !== profileState.faction)
      verifEndGame(profileState?.visitedPlanets, history, hasLost)
    }
  }, [profileState.visitedPlanets, hasLost])
  return (
    <SpaceDiv>
      <ProfileComponent
        profileState={profileState}
        fightAnimation={fightAnimation}
      />
      <CenterBlockSpace
        isEnemy={isEnemy}
        visitedPlanets={profileState.visitedPlanets}
        fightAnimation={fightAnimation}
        setFightAnimation={setFightAnimation}
        setHasLost={setHasLost}
        currentPlanet={planet}
        profileState={profileState}
      />
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
