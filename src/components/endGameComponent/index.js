import React, { useEffect } from 'react'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import { useSelector } from 'react-redux'
import { addNewScore } from '../../utils/funcScore'
import { goLeaderBoardButton, goMenuButton } from '../../utils/funcRouteButton'
import { useTranslation } from 'react-i18next'

const EndGameComponent = () => {
  const profileState = useSelector(state => state.profile.profile)
  const { t } = useTranslation()
  const returnMenuButton = t('ReturnMenuButton')
  const showLeaderBoardButton = t('ShowLeaderBoardButton')
  const admiral = t('Admiral')
  const nameStarship = t('NameStarship')
  const crew = t('Crew')
  const nbPlanetsVisited = t('NbPlanetsVisited')
  const resultTitle = t('Result')
  useEffect(() => {
    addNewScore(
      profileState.name,
      profileState.starship?.name,
      profileState.credit,
      profileState.visitedPlanets
    )
  }, [])
  return (
    <EndGameDiv>
      <TitleStyle>{resultTitle}</TitleStyle>
      <ProfilDiv>
        <DetailProfileDiv>
          <StyledSpan>{`${admiral} : ${profileState.name} `}</StyledSpan>
          <StyledSpan>{`Faction : ${profileState.faction}`}</StyledSpan>
          <StyledSpan>{`${nameStarship} : ${profileState.starship?.name}`}</StyledSpan>
          <StyledSpan>{`Credit : ${profileState.credit}`}</StyledSpan>
          <StyledSpan>{`${crew} : ${profileState.crew}`}</StyledSpan>
          <StyledSpan>{`${nbPlanetsVisited} : ${profileState.visitedPlanets}`}</StyledSpan>
        </DetailProfileDiv>
        <BlockImage src={profileState.starship?.image} />
      </ProfilDiv>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={goLeaderBoardButton}
          textButton={showLeaderBoardButton}
        ></ButtonComponent>
        <ButtonComponent
          onClickButton={goMenuButton}
          textButton={returnMenuButton}
        />
      </ButtonDiv>
    </EndGameDiv>
  )
}

const EndGameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
`
const ProfilDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  align-items: center;
  justify-content: center;
`

const DetailProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 5px 5px;
`
const StyledSpan = styled.span`
  margin: 1px 3px;
`
const BlockImage = styled.img`
  width: 300px;
  padding: 5px;
`

const TitleStyle = styled.span`
  font-weight: bold;
  margin: 15px 0px;
`

const ButtonDiv = styled.div`
  margin: 10px 0px;
`

export default EndGameComponent
