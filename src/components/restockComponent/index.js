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
        <TitleList>{t('Result')}</TitleList>
        <div>
          <InfoSpan>{`Credit : ${profile.credit}`}</InfoSpan>
          <InfoSpan>
            {t('Crew')} : {`${profile.crew}`}
          </InfoSpan>
          <InfoSpan>
            {t('HyperdriveNb')} : {`${profile.counterHD}`}
          </InfoSpan>
        </div>
      </ProfileDiv>
      <ListDiv>
        <CategoryDiv>
          <TitleList>{t('BuyHyperdrive')}</TitleList>
          <ItemComponent
            title={t('OneHyperdrive')}
            cost={500}
            quantity={1}
            type={HdType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('SmallHyperdriveBox')}
            cost={1750}
            quantity={3}
            type={HdType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('AverageHyperdriveBox')}
            cost={3000}
            quantity={5}
            type={HdType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('LargeHyperdriveBox')}
            cost={7500}
            quantity={10}
            type={HdType}
            profile={profile}
          ></ItemComponent>
        </CategoryDiv>
        <CategoryDiv>
          <TitleList>{t('BuyCrew')}</TitleList>
          <ItemComponent
            title={t('Platoon')}
            cost={100}
            quantity={25}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('Squadron')}
            cost={500}
            quantity={100}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('Battalion')}
            cost={6000}
            quantity={1000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('Regiment')}
            cost={20000}
            quantity={3000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('Brigade')}
            cost={75000}
            quantity={10000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('Division')}
            cost={250000}
            quantity={25000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('Corps')}
            cost={500000}
            quantity={50000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('Army')}
            cost={2000000}
            quantity={200000}
            type={CrewType}
            profile={profile}
          ></ItemComponent>
          <ItemComponent
            title={t('ArmyGroup')}
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
  history: PropTypes.object
}

export default RestockComponent
