import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { updateProfile } from '../../actions/profile'

import SelectionStarshipRadioButton from '../selectionStarshipRadioButton'
import SelectionFactionRadioButton from '../selectionFactionRadioButton'
import ButtonComponent from '../buttonComponent'
import { goMenuButton } from '../../utils/funcRouteButton'
import { submitProfileForm } from '../../utils/funcScreens'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Player = ({ rebelList, empireList }) => {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const newProfile = useSelector(state => state.profile.profile)
  const returnMenuButton = 'Retourner au Menu'
  useEffect(() => {
    console.log('Vaisseaux rebelles :', rebelList)
    console.log('Vaisseaux emperiaux :', empireList)
  }, [])
  const [starship, setStarship] = useState({
    name: '',
    model: '',
    img: '',
    maxCapacity: 0
  })
  const rebelStarships = [rebelList[5], rebelList[7], rebelList[16]]
  const empireStarships = [empireList[4], empireList[5], empireList[11]]
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
            starship,
            rebelStarships,
            empireStarships,
            setStarship,
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

Player.propTypes = {
  rebelList: PropTypes.array,
  empireList: PropTypes.array
}

export default Player