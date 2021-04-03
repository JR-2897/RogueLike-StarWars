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
  const [starshipName, setStarshipName] = useState('')
  const [starship, setStarship] = useState({
    name: '',
    model: '',
    img: '',
    maxCapacity: 0
  })
  const [rebelStarships, setRebelStarships] = useState([])
  const [empireStarships, setEmpireStarships] = useState([])
  const [faction, setFaction] = useState('Rebel')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // console.log(rebelList)
    // console.log(empireList)
    setRebelStarships([rebelList[5], rebelList[7], rebelList[16]])
    setEmpireStarships([empireList[4], empireList[5], empireList[11]])
  }, [rebelList, empireList])
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
        />
        <SelectionFactionRadioButton
          setFaction={setFaction}
          faction={faction}
        />
        {faction === 'Rebel' ? (
          <SelectionStarshipRadioButton
            setStarship={setStarshipName}
            starship={starshipName}
            starships={rebelStarships}
          />
        ) : (
          <SelectionStarshipRadioButton
            setStarship={setStarshipName}
            starship={starshipName}
            starships={empireStarships}
          />
        )}
        <SubmitInput type='submit' value={t('ValidForm')} />
        <AlertMessage>{errorMessage}</AlertMessage>
      </Form>
      <ButtonDiv>
        <ButtonComponent
          onClickButton={goMenuButton}
          textButton={returnMenuButton}
        />
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
