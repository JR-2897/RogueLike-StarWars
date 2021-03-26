import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonComponent = ({ onClickButton, textButton }) => {
  return (
    <div>
      <StyledButton onClick={() => onClickButton()}>{textButton}</StyledButton>
    </div>
  )
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func,
  textButton: PropTypes.string
}

const StyledButton = styled.button`
  margin: 5px 0px;
  border: black solid 1px;
  padding: 2px 4px;
  border-radius: 10px;
  border-color: yellow;
  color: yellow;
  background-color: black;
`

export default ButtonComponent
