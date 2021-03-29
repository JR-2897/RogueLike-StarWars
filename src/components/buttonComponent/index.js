import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const ButtonComponent = ({ onClickButton, textButton, dispatch }) => {
  const history = useHistory()
  return (
    <div>
      <StyledButton
        onClick={() => {
          if (dispatch) {
            onClickButton(history, dispatch)
          } else {
            onClickButton(history)
          }
        }}
      >
        {textButton}
      </StyledButton>
    </div>
  )
}

ButtonComponent.propTypes = {
  onClickButton: PropTypes.func,
  textButton: PropTypes.string,
  dispatch: PropTypes.func
}

const StyledButton = styled.button`
  margin: 5px 0px;
  border: ${props => props.theme.border} solid 1px;
  padding: 2px 4px;
  border-radius: 10px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`

export default ButtonComponent
