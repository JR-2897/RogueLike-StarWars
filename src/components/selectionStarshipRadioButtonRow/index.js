import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectionStarshipRadioButtonRow = ({
  setStarship,
  valueStarship,
  starship
}) => {
  return (
    <DivRadioButton>
      <RadioButtonInput
        type='radio'
        name='vaisseaux'
        value={valueStarship.name}
        onChange={res => setStarship(res.target.value)}
        checked={starship === valueStarship.name}
      ></RadioButtonInput>
      {
        //<RadioButtonImg src={starship.img}></RadioButtonImg>
      }
      <span>{valueStarship.name}</span>
    </DivRadioButton>
  )
}

const DivRadioButton = styled.div``
const RadioButtonInput = styled.input``
const RadioButtonImg = styled.img``

SelectionStarshipRadioButtonRow.propTypes = {
  setStarship: PropTypes.func,
  valueStarship: PropTypes.object,
  starship: PropTypes.object
}

export default SelectionStarshipRadioButtonRow
