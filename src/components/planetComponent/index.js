import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlanetComponent = ({ planet }) => {
  const namePlanet = 'Nom'
  const classPlanet = 'Classe'
  const garrison = 'Garnison'
  const faction = 'Faction'

  return (
    <PlanetDiv>
      Partie Planète
      <BlockImage src={planet.img} />
      <DetailComponentDiv>
        <StyledSpan>{`${namePlanet} : ${planet.name}`}</StyledSpan>
        <StyledSpan>{`${faction} : ${planet.faction}`}</StyledSpan>
        <StyledSpan>{`${garrison} : ${planet.garrisson}`}</StyledSpan>
        <StyledSpan>{`${classPlanet} : ${planet.class} `}</StyledSpan>
      </DetailComponentDiv>
    </PlanetDiv>
  )
}

const PlanetDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
`
const BlockImage = styled.img`
  width: 300px;
  padding: 5px;
`

const DetailComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 5px 5px;
`
const StyledSpan = styled.span`
  margin: 1px 3px;
`

PlanetComponent.propTypes = {
  planet: PropTypes.object
}

export default PlanetComponent
