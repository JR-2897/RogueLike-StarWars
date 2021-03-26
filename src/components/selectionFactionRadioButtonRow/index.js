import React from 'react'
import styled from 'styled-components'

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

export default SelectionFactionRadioButtonRow
