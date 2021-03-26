import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'

const MenuComponent = props => {
  const startButton = 'Commencer'
  const showLeaderBoardButton = 'Voir le tableau des scores'
  return (
    <MenuDiv>
      <ButtonComponent
        onClickButton={actionButton}
        textButton={startButton}
      ></ButtonComponent>
      <ButtonComponent
        onClickButton={actionButton}
        textButton={showLeaderBoardButton}
      ></ButtonComponent>
    </MenuDiv>
  )
}

const actionButton = () => {}
MenuComponent.propTypes = {}

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
`

export default MenuComponent
