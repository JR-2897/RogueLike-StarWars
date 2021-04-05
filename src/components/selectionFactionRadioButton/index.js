import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import SelectionFactionRadioButtonRow from '../selectionFactionRadioButtonRow'

const SelectionFactionRadioButton = ({ setFaction, faction }) => {
  const { t, i18n } = useTranslation()
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

const DivRadioButtons = styled.div`
  margin: 15px 0px;
`
const LabelFactions = styled.label``

export default SelectionFactionRadioButton
