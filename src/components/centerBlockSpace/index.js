import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'

const CenterBlockSpace = ({ isEnemy, visitedPlanets }) => {
  const nbPlanetsVisited = 'Nombre de planète visitée'
  const fightButton = 'Combattre'
  const skipButton = 'Passer'
  const useHyperDriveButton = 'Hyper drive'
  const shopStarshipButton = 'Magasin'
  const restockButton = 'Se répprovisionner'
  return (
    <CenterDiv>
      <BlockComponentsDiv>{`${nbPlanetsVisited} : ${visitedPlanets}`}</BlockComponentsDiv>
      {isEnemy ? (
        <ButtonDiv>
          <ButtonComponent
            onClickButton={actionButton}
            textButton={fightButton}
          ></ButtonComponent>
          <ButtonComponent
            onClickButton={actionButton}
            textButton={useHyperDriveButton}
          ></ButtonComponent>
        </ButtonDiv>
      ) : (
        <ButtonDiv>
          <ButtonComponent
            onClickButton={actionButton}
            textButton={shopStarshipButton}
          ></ButtonComponent>
          <ButtonComponent
            onClickButton={actionButton}
            textButton={restockButton}
          ></ButtonComponent>
          <ButtonComponent
            onClickButton={actionButton}
            textButton={skipButton}
          ></ButtonComponent>
        </ButtonDiv>
      )}
    </CenterDiv>
  )
}
const actionButton = () => {}

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
CenterBlockSpace.propTypes = {
  isEnemy: PropTypes.bool,
  visitedPlanets: PropTypes.number
}

export default CenterBlockSpace
