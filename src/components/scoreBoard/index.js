import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { getScoreList } from '../../utils/funcScore'
import ButtonComponent from '../buttonComponent'

const ScoreBoard = props => {
  const [scoreList, setScoreList] = useState([])
  const amiradl = 'Amiral'
  const nameStarship = 'Nom de vaisseau'
  const nbPlanetsVisited = 'Nombre de planète visitée'
  const returnMenuButton = 'Retourner au Menu'
  useEffect(() => {
    getScoreList(setScoreList)
  }, [])
  return (
    <ScoreBoardDiv>
      <StyledScoreTitle>Tableau des scores</StyledScoreTitle>
      <table>
        <thead>
          <StyledScoreHeaderTr>
            <td>{amiradl}</td>
            <td>{nameStarship}</td>
            <td>Credit</td>
            <td>{nbPlanetsVisited}</td>
          </StyledScoreHeaderTr>
        </thead>
        <tbody>
          {scoreList.map(score => {
            return (
              <StyledScoreSerieTr key={score.id}>
                <StyledScoreSerieTd>{score.amiradl}</StyledScoreSerieTd>
                <StyledScoreSerieTd>{score.nameStarship}</StyledScoreSerieTd>
                <StyledScoreSerieTd>{score.credit}</StyledScoreSerieTd>
                <StyledScoreSerieTd>{score.visitedPlanet}</StyledScoreSerieTd>
              </StyledScoreSerieTr>
            )
          })}
        </tbody>
      </table>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={() => {}}
          textButton={returnMenuButton}
        ></ButtonComponent>
      </ButtonDiv>
    </ScoreBoardDiv>
  )
}

ScoreBoard.propTypes = {}

const ScoreBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledScoreTitle = styled.span`
  margin: 10px 0px;
  font-size: 20px;
  font-weight: bold;
`

const StyledScoreSerieTr = styled.tr``

const StyledScoreSerieTd = styled.td`
  padding: 0px 15px;
  width: 50px;
`
const StyledScoreHeaderTr = styled.tr`
  margin: 5px 5px;
`
const ButtonDiv = styled.div`
  margin: 20px 0px;
`
export default ScoreBoard
