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

const Space = ({ planetsList }) => {
  const profileState = useSelector(state => state.profile.profile)
  const [fightAnimation, setFightAnimation] = useState('initial')

  const [planet, setPlanet] = useState({
    name: 'Terre',
    faction: 'Rebel',
    garrison: 10000,
    class: 3
  })
  const [isEnemy, setIsEnemy] = useState(false)
  useEffect(() => {
    let currentPlanet = planetsList[r(planetsList.length - 1)]
    setPlanet(currentPlanet)
    setIsEnemy(currentPlanet.faction !== profileState.faction)
  }, [])
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
