import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { variantFightAnimation } from '../../utils/funcAnimation'
import { useTranslation } from 'react-i18next'

const ProfileComponent = ({ profileState, fightAnimation }) => {
  const { t, i18n } = useTranslation()
  const admiral = t('Admiral')
  const nameStarship = t('StarshipName')
  const model = t('Model')
  const crew = t('Crew')
  const counterHDRemaining = t('counterHDRemaining')
  return (
    <ProfileDiv>
      <DetailComponentDiv>
        <StyledSpan>{`${admiral} : ${profileState.name} `}</StyledSpan>
        <StyledSpan>{`Faction : ${profileState.faction}`}</StyledSpan>
      </DetailComponentDiv>
      <BlockImage
        src={profileState.starship?.image}
        variants={variantFightAnimation}
        animate={fightAnimation}
        alt={profileState.starship?.name}
      />
      <DetailComponentDiv>
        <StyledSpan>{`${nameStarship} : ${profileState.starship?.name}`}</StyledSpan>
        <StyledSpan>{`${model} : ${profileState.starship?.model}`}</StyledSpan>
        <StyledSpan>{`Credit : ${profileState.credit}`}</StyledSpan>
        <StyledSpan>{`${crew} : ${profileState.crew} / ${profileState.starship?.maxCapacity}`}</StyledSpan>
        <StyledSpan>{`${counterHDRemaining} : ${profileState.counterHD}`}</StyledSpan>
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
const BlockImage = styled(motion.img)`
  align-items: center;
  width: 300px;
  padding: 5px;
`

const DetailComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 5px 5px;
  padding: 0px 10px;
  width: 300px;
`

const StyledSpan = styled.span`
  margin: 1px 3px;
`

ProfileComponent.propTypes = {
  profileState: PropTypes.object,
  fightAnimation: PropTypes.string
}

export default ProfileComponent
