import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const ButtonComponent = ({ onClickButton, textButton }) => {
  const history = useHistory()
  return (
    <div>
      <StyledButton onClick={() => onClickButton(history)}>
        {textButton}
      </StyledButton>
    </div>
  )
}

ButtonComponent.propTypes = {
  onClickButton: PropTypes.func,
  textButton: PropTypes.string
}

const StyledButton = styled.button`
  margin: 5px 0px;
  border: yellow solid 1px;
  padding: 2px 4px;
  border-radius: 10px;
  color: yellow;
  background-color: black;
`

export default ButtonComponent
