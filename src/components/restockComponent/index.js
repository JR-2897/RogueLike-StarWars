import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import {
  skipPlanetActionButton,
  shopStarshipActionButton
} from '../../utils/funcRouteButton'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const RestockComponent = props => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const skipButton = t('SkipButton')
  const shopStarshipButton = t('StarshipShopButton')
  return (
    <RestockComponentDiv>
      <ListDiv>
        <ul></ul>
      </ListDiv>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={shopStarshipActionButton}
          textButton={shopStarshipButton}
        ></ButtonComponent>
        <ButtonComponent
          onClickButton={skipPlanetActionButton}
          dispatch={dispatch}
          textButton={skipButton}
        ></ButtonComponent>
      </ButtonDiv>
    </RestockComponentDiv>
  )
}

const RestockComponentDiv = styled.div``
const ButtonDiv = styled.div``
const ListDiv = styled.div``

RestockComponent.propTypes = {}

export default RestockComponent
