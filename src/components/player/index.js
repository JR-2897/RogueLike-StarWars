import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { updateProfile } from '../../actions/profile'

import SelectionStarshipRadioButton from '../selectionStarshipRadioButton'
import SelectionFactionRadioButton from '../selectionFactionRadioButton'
import ButtonComponent from '../buttonComponent'
import { goMenuButton } from '../../utils/funcRouteButton'
import { submitProfileForm } from '../../utils/funcScreens'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Player = () => {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const newProfile = useSelector(state => state.profile.profile)
  const returnMenuButton = 'Retourner au Menu'
  const [starshipName, setStarshipName] = useState('')
  const rebelStarships = [
    {
      name: 'X-Wing',
      model: 'T-65 X-Wing',
      img: '../../../public/logo_sw.png',
      maxCapacity: 1
    },
    {
      name: 'Y-Wing',
      model: 'T-65 Y-Wing',
      img: '../../../public/logo_sw.png',
      maxCapacity: 2
    },
    {
      name: 'B-Wing',
      model: 'T-65 B-Wing',
      img: '../../../public/logo_sw.png',
      maxCapacity: 1
    }
  ]
  const empireStarships = [
    {
      name: 'TIE fighter',
      model: 'TIE',
      img: '../../../public/logo_sw.png',
      maxCapacity: 1
    },
    {
      name: 'TIE interceptor',
      model: 'TIE',
      img: '../../../public/logo_sw.png',
      maxCapacity: 1
    },
    {
      name: 'TIE bomber',
      model: 'TIE',
      img: '../../../public/logo_sw.png',
      maxCapacity: 1
    }
  ]
  const [faction, setFaction] = useState('Rebel')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  return (
    <DivForm>
      <PlayerTitle>{t('TitleFormPlayer')}</PlayerTitle>
      <Form
        onSubmit={e =>
          submitProfileForm(
            e,
            name,
            faction,
            starshipName,
            rebelStarships,
            empireStarships,
            setStarshipName,
            t,
            setErrorMessage,
            dispatch,
            history
          )
        }
      >
        <InputPlayer
          placeholder={t('PlaceholderName')}
          type='text'
          onChange={e => setName(e.target.value)}
        ></InputPlayer>
        <SelectionFactionRadioButton
          setFaction={setFaction}
          faction={faction}
        ></SelectionFactionRadioButton>
        {faction === 'Rebel' ? (
          <SelectionStarshipRadioButton
            setStarship={setStarshipName}
            starship={starshipName}
            starships={rebelStarships}
          ></SelectionStarshipRadioButton>
        ) : (
          <SelectionStarshipRadioButton
            setStarship={setStarshipName}
            starship={starshipName}
            starships={empireStarships}
          ></SelectionStarshipRadioButton>
        )}
        <SubmitInput type='submit' value={t('ValidForm')}></SubmitInput>
        <AlertMessage>{errorMessage}</AlertMessage>
      </Form>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={goMenuButton}
          textButton={returnMenuButton}
        ></ButtonComponent>
      </ButtonDiv>
    </DivForm>
  )
}

const DivForm = styled.div``
const PlayerTitle = styled.span``
const Form = styled.form``
const InputPlayer = styled.input``
const SubmitInput = styled.input``
const AlertMessage = styled.span`
  color: red;
`

const ButtonDiv = styled.div`
  margin: 20px 0px;
`

export default Player
