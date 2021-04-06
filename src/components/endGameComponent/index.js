import React, { useEffect } from 'react'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import { useSelector } from 'react-redux'
import { addNewScore } from '../../utils/funcScore'
import { goLeaderBoardButton, goMenuButton } from '../../utils/funcRouteButton'

const EndGameComponent = () => {
  const profileState = useSelector(state => state.profile.profile)
  const returnMenuButton = 'Retourner au Menu'
  const showLeaderBoardButton = 'Voir le tableau des scores'
  const admiral = 'Amiral'
  const nameStarship = 'Nom de vaisseau'
  const crew = 'Equipage'
  const nbPlanetsVisited = 'Nombre de planète visitée'
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
      <ProfilDiv>
        <DetailProfileDiv>
          <StyledSpan>{`${admiral} : ${profileState.name} `}</StyledSpan>
          <StyledSpan>{`Faction : ${profileState.faction}`}</StyledSpan>
          <StyledSpan>{`${nameStarship} : ${profileState.starship?.name}`}</StyledSpan>
          <StyledSpan>{`Credit : ${profileState.credit}`}</StyledSpan>
          <StyledSpan>{`${crew} : ${profileState.crew}`}</StyledSpan>
          <StyledSpan>{`${nbPlanetsVisited} : ${profileState.visitedPlanets}`}</StyledSpan>
        </DetailProfileDiv>
        <BlockImage src={profileState.starship?.img} />
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

const ButtonDiv = styled.div`
  margin: 10px 0px;
`

export default EndGameComponent
