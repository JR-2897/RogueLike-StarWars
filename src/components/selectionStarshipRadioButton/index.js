import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import SelectionStarshipRadioButtonRow from '../selectionStarshipRadioButtonRow'

const SelectionStarshipRadioButton = ({ setStarship, starship, starships }) => {
  const { t, i18n } = useTranslation()
  return (
    <DivRadioButtons>
      <LabelsStarships>{t('Starships')}</LabelsStarships>
      <SelectionStarshipRadioButtonRow
        setStarship={setStarship}
        valueStarship={starships[0]}
        starship={starship}
      ></SelectionStarshipRadioButtonRow>
      <SelectionStarshipRadioButtonRow
        setStarship={setStarship}
        valueStarship={starships[1]}
        starship={starship}
      ></SelectionStarshipRadioButtonRow>
      <SelectionStarshipRadioButtonRow
        setStarship={setStarship}
        valueStarship={starships[2]}
        starship={starship}
      ></SelectionStarshipRadioButtonRow>
    </DivRadioButtons>
  )
}

const DivRadioButtons = styled.div`
  margin: 15px 0px;
`
const LabelsStarships = styled.label``

SelectionStarshipRadioButton.propTypes = {
  setStarship: PropTypes.func,
  starships: PropTypes.array,
  starship: PropTypes.string
}

export default SelectionStarshipRadioButton
