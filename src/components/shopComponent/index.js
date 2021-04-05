import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  skipPlanetActionInShopButton,
  restockActionButton
} from '../../utils/funcRouteButton'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const ShopComponent = ({ history, rebelList, empireList }) => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const skipButton = t('SkipButton')
  const restockButton = t('RestockButton')
  const profile = useSelector(state => state.profile.profile)
  return (
    <ShopComponentDiv>
      <ListDiv>
        <ul></ul>
      </ListDiv>
      <ButtonDiv>
        <ButtonStyled
          onClick={() => {
            restockActionButton(history)
          }}
        >
          {restockButton}
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
    </ShopComponentDiv>
  )
}

const ShopComponentDiv = styled.div``
const ButtonDiv = styled.div``
const ListDiv = styled.div``

const ButtonStyled = styled.button`
  margin: 5px 10px;
  border: ${props => props.theme.border} solid 1px;
  padding: 4px 6px;
  border-radius: 10px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`

ShopComponent.propTypes = {
  rebelList: PropTypes.array,
  empireList: PropTypes.array,
  history: PropTypes.object
}

export default ShopComponent
