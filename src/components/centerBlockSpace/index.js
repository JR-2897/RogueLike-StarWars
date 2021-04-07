import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import { launchFightAnimation } from '../../utils/funcAnimation'
import { fight } from '../../utils/funcFight'
import { useDispatch } from 'react-redux'
import {
  restockActionButton,
  shopStarshipActionButton,
  skipPlanetActionButton,
  useHyperDriveActionButton
} from '../../utils/funcRouteButton'
import { useTranslation } from 'react-i18next'

const CenterBlockSpace = ({
  isEnemy,
  visitedPlanets,
  fightAnimation,
  setFightAnimation,
  setHasLost,
  currentPlanet,
  profileState
}) => {
  const { t } = useTranslation()
  const nbPlanetsVisited = t('NbPlanetsVisited')
  const fightButton = t('FightButton')
  const skipButton = t('SkipButton')
  const useHyperDriveButton = t('UseHyperDriveButton')
  const shopStarshipButton = t('StarshipShopButton')
  const restockButton = t('RestockButton')
  const dispatch = useDispatch()
  const animationTimeout = useRef(null)
  const refActive = useRef(null)
  const [active, setActive] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (active) {
      animationTimeout.current = setTimeout(() => {
        setFightAnimation(
          fightAnimation == 'animated2' ? 'animated1' : 'animated2'
        )
      }, 550)
      clearTimeout(animationTimeout)
    } else {
      setFightAnimation('initial')
    }
  }, [active, fightAnimation])

  return (
    <CenterDiv>
      <BlockComponentsDiv>{`${nbPlanetsVisited} : ${visitedPlanets}`}</BlockComponentsDiv>
      {isEnemy ? (
        <ButtonDiv>
          <StyledButton
            onClick={() => {
              setMessage('')
              launchFightAnimation(refActive, setActive)
              fight(profileState, currentPlanet, dispatch, setHasLost)
            }}
          >
            {fightButton}
          </StyledButton>
          <StyledButton
            onClick={() =>
              useHyperDriveActionButton(dispatch, profileState, setMessage)
            }
          >
            {useHyperDriveButton}
          </StyledButton>
        </ButtonDiv>
      ) : (
        <ButtonDiv>
          <ButtonComponent
            onClickButton={shopStarshipActionButton}
            textButton={shopStarshipButton}
          />
          <ButtonComponent
            onClickButton={restockActionButton}
            textButton={restockButton}
          />
          <ButtonComponent
            onClickButton={skipPlanetActionButton}
            dispatch={dispatch}
            textButton={skipButton}
          />
        </ButtonDiv>
      )}
      <StyledSpan>{message}</StyledSpan>
    </CenterDiv>
  )
}

const CenterDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
  margin: 20px 5px;
`
const BlockComponentsDiv = styled.div`
  padding: 5px 5px;
  margin: 5px 5px;
`
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledButton = styled.button`
  margin: 5px 0px;
  border: ${props => props.theme.border} solid 1px;
  padding: 2px 4px;
  border-radius: 10px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`

const StyledSpan = styled.span`
  margin: 2px 0px;
  color: red;
`
CenterBlockSpace.propTypes = {
  isEnemy: PropTypes.bool,
  visitedPlanets: PropTypes.number,
  fightAnimation: PropTypes.string,
  setFightAnimation: PropTypes.func,
  currentPlanet: PropTypes.object,
  setHasLost: PropTypes.func,
  profileState: PropTypes.object
}

export default CenterBlockSpace
