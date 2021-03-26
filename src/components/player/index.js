import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { updateProfile } from '../../actions/profile'

import SelectionStarshipRadioButton from '../selectionStarshipRadioButton'
import SelectionFactionRadioButton from '../selectionFactionRadioButton'

const submit = (
  e,
  name,
  faction,
  starship,
  rebelStarships,
  empireStarships,
  newProfile,
  setStarship,
  t,
  setErrorMessage,
  dispatch
) => {
  e.preventDefault()
  if (!name) {
    setErrorMessage(t('ErrorMessageName'))
    return
  }
  if (faction === 'Rebel') {
    setStarship(rebelStarships.find(x => x.name === starship))
  } else {
    setStarship(empireStarships.find(x => x.name === starship))
  }
  if (!starship) {
    setErrorMessage(t('ErrorMessageStarship'))
    return
  }
  dispatch(
    updateProfile({
      name: name,
      starship: starship,
      credit: 1000,
      counterHD: 3,
      faction: faction,
      crewNb: starship.maxCapacity
    })
  )
}

const Player = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const newProfile = useSelector(state => state.profile.profile)
  const [starship, setStarship] = useState({
    name: '',
    model: '',
    img: '',
    maxCapacity: 0
  })
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
          submit(
            e,
            name,
            faction,
            starship,
            rebelStarships,
            empireStarships,
            newProfile,
            setStarship,
            t,
            setErrorMessage,
            dispatch
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
            setStarship={setStarship}
            starship={starship}
            starships={rebelStarships}
          ></SelectionStarshipRadioButton>
        ) : (
          <SelectionStarshipRadioButton
            setStarship={setStarship}
            starship={starship}
            starships={empireStarships}
          ></SelectionStarshipRadioButton>
        )}
        <SubmitInput type='submit' value={t('ValidForm')}></SubmitInput>
        <AlertMessage>{errorMessage}</AlertMessage>
      </Form>
    </DivForm>
  )
}

const DivForm = styled.div``
const PlayerTitle = styled.span``
const Form = styled.form``
const InputPlayer = styled.input``
const SubmitInput = styled.input``
const AlertMessage = styled.span``

export default Player
