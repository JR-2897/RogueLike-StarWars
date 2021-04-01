import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import { useDispatch } from 'react-redux'
import {
  goLeaderBoardButton,
  startActionButton
} from '../../utils/funcRouteButton'
import { useTranslation } from 'react-i18next'

const MenuComponent = props => {
  const { t, i18n } = useTranslation()
  const startButton = t('StartButton')
  const showLeaderBoardButton = t('ShowLeaderBoardButton')
  const dispatch = useDispatch()
  return (
    <MenuDiv>
      <ButtonComponent
        onClickButton={(history, dispatch) => {
          startActionButton(dispatch, history)
        }}
        dispatch={dispatch}
        textButton={startButton}
      ></ButtonComponent>
      <ButtonComponent
        onClickButton={goLeaderBoardButton}
        textButton={showLeaderBoardButton}
      ></ButtonComponent>
    </MenuDiv>
  )
}

MenuComponent.propTypes = {}

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
`

export default MenuComponent
