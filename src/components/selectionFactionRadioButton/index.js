import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import SelectionFactionRadioButtonRow from '../selectionFactionRadioButtonRow'

const SelectionFactionRadioButton = ({ setFaction, faction }) => {
  const { t } = useTranslation()
  return (
    <DivRadioButtons>
      <LabelFactions>{t('ChoiceFactions')}</LabelFactions>
      <SelectionFactionRadioButtonRow
        setFaction={setFaction}
        valueFaction={'Rebel'}
        faction={faction}
        labelFaction={t('RebelAlliance')}
      ></SelectionFactionRadioButtonRow>
      <SelectionFactionRadioButtonRow
        setFaction={setFaction}
        valueFaction={'Empire'}
        faction={faction}
        labelFaction={t('GalacticEmpire')}
      ></SelectionFactionRadioButtonRow>
    </DivRadioButtons>
  )
}

const DivRadioButtons = styled.div``
const LabelFactions = styled.label``

SelectionFactionRadioButton.propTypes = {
  setFaction: PropTypes.func,
  faction: PropTypes.string
}

export default SelectionFactionRadioButton
