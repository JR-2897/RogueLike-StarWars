import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  shopStarshipActionButton,
  skipPlanetActionInShopButton
} from '../../utils/funcRouteButton'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ItemComponent from '../ItemComponent'
import { CrewType, HdType } from '../../utils/funcType'

const RestockComponent = ({ history }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.profile)
  const skipButton = t('SkipButton')
  const shopStarshipButton = t('StarshipShopButton')
  return (
    <RestockComponentDiv>
      <ProfileDiv>
        <TitleList>{`Vos informations`}</TitleList>
        <div>
          <InfoSpan>{`Credit : ${profile.credit}`}</InfoSpan>
          <InfoSpan>{`Nb d'équipage : ${profile.crew}`}</InfoSpan>
          <InfoSpan>{`Nb d'hyper drive : ${profile.counterHD}`}</InfoSpan>
        </div>
      </ProfileDiv>
      <ListDiv>
        <CategoryDiv>
          <TitleList>{`Achat d'unité Hyper drive`}</TitleList>
          <ItemComponent
            title={`Unité d'hyper drive`}
            cost={500}
            quantity={1}
            type={HdType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Petite caisse d'hyper drive`}
            cost={1750}
            quantity={3}
            type={HdType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Moyenne caisse d'hyper drive`}
            cost={3000}
            quantity={5}
            type={HdType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Grande caisse d'hyper drive`}
            cost={7500}
            quantity={10}
            type={HdType}
            profile={profile}
          ></ItemComponent>
        </CategoryDiv>
        <CategoryDiv>
          <TitleList>{`Achat de membre d'équipage`}</TitleList>
          <ItemComponent
            title={`Peloton d'équipage`}
            cost={100}
            quantity={25}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Escadron d'équipage`}
            cost={500}
            quantity={100}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Bataillon d'équipage`}
            cost={6000}
            quantity={1000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Régiment d'équipage`}
            cost={20000}
            quantity={3000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Brigade d'équipage`}
            cost={75000}
            quantity={10000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Division d'équipage`}
            cost={250000}
            quantity={25000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Corp armée d'équipage`}
            cost={500000}
            quantity={50000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`Armée d'équipage`}
            cost={2000000}
            quantity={200000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={`GATE (Great Army of Total Extermination) d'équipage`}
            cost={9999999}
            quantity={1000000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
        </CategoryDiv>
      </ListDiv>
      <ButtonDiv>
        <ButtonStyled
          onClick={() => {
            shopStarshipActionButton(history)
          }}
        >
          {shopStarshipButton}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => {
            skipPlanetActionInShopButton(
              history,
              dispatch,
              profile.visitedPlanets
            )
          }}
        >
          {skipButton}
        </ButtonStyled>
      </ButtonDiv>
    </RestockComponentDiv>
  )
}

const RestockComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
`
const ButtonDiv = styled.div`
  margin: 20px 0px;
`
const ListDiv = styled.div``
const CategoryDiv = styled.div``
const TitleList = styled.span`
  font-weight: bold;
  font-size: 20px;
`
const InfoSpan = styled.span`
  margin: 10px 10px;
`
const ProfileDiv = styled.div`
  margin: 20px 0px;
`

const ButtonStyled = styled.button`
  margin: 5px 10px;
  border: ${props => props.theme.border} solid 1px;
  padding: 4px 6px;
  border-radius: 10px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`

RestockComponent.propTypes = {
  history: PropTypes.func
}

export default RestockComponent
