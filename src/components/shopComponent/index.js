import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import {
  skipPlanetActionButton,
  restockActionButton
} from '../../utils/funcRouteButton'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const ShopComponent = ({ rebelList, empireList }) => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const skipButton = t('SkipButton')
  const restockButton = t('RestockButton')
  return (
    <ShopComponentDiv>
      <ListDiv>
        <ul></ul>
      </ListDiv>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={restockActionButton}
          textButton={restockButton}
        ></ButtonComponent>
        <ButtonComponent
          onClickButton={skipPlanetActionButton}
          dispatch={dispatch}
          textButton={skipButton}
        ></ButtonComponent>
      </ButtonDiv>
    </ShopComponentDiv>
  )
}

const ShopComponentDiv = styled.div``
const ButtonDiv = styled.div``
const ListDiv = styled.div``

ShopComponent.propTypes = {
  rebelList: PropTypes.array,
  empireList: PropTypes.array
}

export default ShopComponent
