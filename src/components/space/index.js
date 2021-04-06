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
import { useHistory } from 'react-router'

const Space = ({ planetsList }) => {
  const profileState = useSelector(state => state.profile.profile)
  const [fightAnimation, setFightAnimation] = useState('initial')
  const history = useHistory()
  const [hasLost, setHasLost] = useState(false)

  const [planet, setPlanet] = useState({
    name: 'Terre',
    faction: 'Rebel',
    garrison: 10000,
    class: 3
  })
  const [isEnemy, setIsEnemy] = useState(false)
  const chosePlanet = list => {
    var p = list[r(list.length - 1)]
    if (p.class > Math.max(3 * profileState.visitedPlanets, 4)) {
      list.splice(list.indexOf(p), 1)
      return chosePlanet(list)
    } else return p
  }
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
