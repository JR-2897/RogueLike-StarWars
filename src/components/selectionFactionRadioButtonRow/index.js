import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectionFactionRadioButtonRow = ({
  setFaction,
  valueFaction,
  faction,
  labelFaction
}) => {
  return (
    <DivRadioButton>
      <RadioButtonInput
        type='radio'
        value={valueFaction}
        onChange={res => setFaction(String(res.target.value))}
        checked={faction === valueFaction}
      ></RadioButtonInput>
      <RadioButtonText>{labelFaction}</RadioButtonText>
    </DivRadioButton>
  )
}

const DivRadioButton = styled.div``
const RadioButtonInput = styled.input``
const RadioButtonText = styled.span``

SelectionFactionRadioButtonRow.propTypes = {
  setFaction: PropTypes.func,
  valueFaction: PropTypes.string,
  faction: PropTypes.string,
  labelFaction: PropTypes.string
}

export default SelectionFactionRadioButtonRow
