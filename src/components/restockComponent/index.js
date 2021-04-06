import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonComponent from '../buttonComponent'
import {
  skipPlanetActionButton,
  shopStarshipActionButton
} from '../../utils/funcRouteButton'
import { useDispatch } from 'react-redux'

const RestockComponent = props => {
  const dispatch = useDispatch()
  const skipButton = 'Passer'
  const shopStarshipButton = 'Magasin'
  return (
    <RestockComponentDiv>
      <ListDiv>
        <ul></ul>
      </ListDiv>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={shopStarshipActionButton}
          textButton={shopStarshipButton}
        />
        <ButtonComponent
          onClickButton={skipPlanetActionButton}
          dispatch={dispatch}
          textButton={skipButton}
        />
      </ButtonDiv>
    </RestockComponentDiv>
  )
}

const RestockComponentDiv = styled.div``
const ButtonDiv = styled.div``
const ListDiv = styled.div``

RestockComponent.propTypes = {}

export default RestockComponent
