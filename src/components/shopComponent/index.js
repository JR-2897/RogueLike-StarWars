import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import {
  skipPlanetActionButton,
  restockActionButton
} from '../../utils/funcRouteButton'
import { useDispatch } from 'react-redux'

const ShopComponent = ({ rebelList, empireList }) => {
  const dispatch = useDispatch()
  const skipButton = 'Passer'
  const restockButton = 'Se répprovisionner'
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
