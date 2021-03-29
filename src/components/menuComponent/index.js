import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import { useDispatch } from 'react-redux'
import { resetProfile } from '../../actions/profile'
import {
  goLeaderBoardButton,
  startActionButton
} from '../../utils/funcRouteButton'

const MenuComponent = props => {
  const startButton = 'Commencer'
  const showLeaderBoardButton = 'Voir le tableau des scores'
  const dispatch = useDispatch()
  return (
    <MenuDiv>
      <ButtonComponent
        onClickButton={(history, dispatch) => {
          dispatch(resetProfile())
          startActionButton(history)
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
