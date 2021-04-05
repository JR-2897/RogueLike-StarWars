import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { getScoreList } from '../../utils/funcScore'
import ButtonComponent from '../buttonComponent'
import { goMenuButton } from '../../utils/funcRouteButton'
import { useTranslation } from 'react-i18next'

const ScoreBoard = () => {
  const [scoreList, setScoreList] = useState([])
  const { t } = useTranslation()
  const admiral = t('Admiral')
  const nameStarship = t('StarshipName')
  const nbPlanetsVisited = t('NbPlanetsVisited')
  const returnMenuButton = t('ReturnMenuButton')
  useEffect(() => {
    getScoreList(setScoreList)
  }, [])
  return (
    <ScoreBoardDiv>
      <StyledScoreTitle>{t('ScoreBoardTitle')}</StyledScoreTitle>
      <table>
        <thead>
          <StyledScoreHeaderTr>
            <td>{admiral}</td>
            <td>{nameStarship}</td>
            <td>Credit</td>
            <td>{nbPlanetsVisited}</td>
          </StyledScoreHeaderTr>
        </thead>
        <tbody>
          {scoreList.map(score => {
            return (
              <StyledScoreSerieTr key={score.id}>
                <StyledScoreSerieTd>{score.admiral}</StyledScoreSerieTd>
                <StyledScoreSerieTd>{score.nameStarship}</StyledScoreSerieTd>
                <StyledScoreSerieTd>{score.credit}</StyledScoreSerieTd>
                <StyledScoreSerieTd>{score.visitedPlanets}</StyledScoreSerieTd>
              </StyledScoreSerieTr>
            )
          })}
        </tbody>
      </table>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={goMenuButton}
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
