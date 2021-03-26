import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProfileComponent = ({ profileState }) => {
  const amiradl = 'Amiral'
  const nameStarship = 'Nom de vaisseau'
  const model = 'Modèle'
  const crew = 'Equipage'
  return (
    <ProfileDiv>
      Partie Vaisseau
      <DetailComponentDiv>
        <StyledSpan>{`${amiradl} : ${profileState.name} `}</StyledSpan>
        <StyledSpan>{`Faction : ${profileState.faction}`}</StyledSpan>
      </DetailComponentDiv>
      <BlockImage src={profileState.starship?.img} />
      <DetailComponentDiv>
        <StyledSpan>{`${nameStarship} : ${profileState.starship?.name}`}</StyledSpan>
        <StyledSpan>{`${model} : ${profileState.starship?.model}`}</StyledSpan>
        <StyledSpan>{`Credit : ${profileState.credit}`}</StyledSpan>
        <StyledSpan>{`${crew} : ${profileState.crew} / ${profileState.starship?.maxCapacity}`}</StyledSpan>
      </DetailComponentDiv>
    </ProfileDiv>
  )
}

const ProfileDiv = styled.div`
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

ProfileComponent.propTypes = {
  profileState: PropTypes.object
}

export default ProfileComponent
