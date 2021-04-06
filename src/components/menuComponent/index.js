import React from 'react'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import { useDispatch } from 'react-redux'
import {
  goLeaderBoardButton,
  startActionButton
} from '../../utils/funcRouteButton'
import { useTranslation } from 'react-i18next'

const MenuComponent = () => {
  const { t } = useTranslation()
  const startButton = t('StartButton')
  const showLeaderBoardButton = t('ShowLeaderBoardButton')
  const dispatch = useDispatch()
  return (
    <MenuDiv>
      <ImageBlock src='https://images5.alphacoders.com/926/thumb-1920-926391.png' />
      <DivStyled>
        <ButtonComponent
          onClickButton={(history, dispatch) => {
            startActionButton(dispatch, history)
          }}
          dispatch={dispatch}
          textButton={startButton}
        />
        <ButtonComponent
          onClickButton={goLeaderBoardButton}
          textButton={showLeaderBoardButton}
        />
      </DivStyled>
    </MenuDiv>
  )
}

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
`
const ImageBlock = styled.img`
  width: 50%;
`
const DivStyled = styled.div`
  margin: 10px 0px;
`
export default MenuComponent
