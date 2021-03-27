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

  const [planet, setPlanet] = useState({
    name: 'Terre',
    faction: 'Rebel',
    garrison: 10000,
    class: 3
  })
  const [isEnemy, setIsEnemy] = useState(false)
  useEffect(() => {
    console.log(`planetsList[0]`, planetsList[0])
    let currentPlanet = planetsList[r(planetsList.length - 1)]
    setPlanet(currentPlanet)
  }, [planetsList])
  return (
    <SpaceDiv>
      <ProfileComponent profileState={profileState}></ProfileComponent>
      <CenterBlockSpace
        isEnemy={isEnemy}
        visitedPlanets={profileState.visitedPlanets}
      ></CenterBlockSpace>
      <PlanetComponent planet={planet}></PlanetComponent>
    </SpaceDiv>
  )
}

const SpaceDiv = styled.div`
  display: flex;
  flex-direction: row; //column
  align-items: center;
  justify-content: center;
  color: yellow;
  background-color: black;
`
Space.propTypes = {}

export default Space
