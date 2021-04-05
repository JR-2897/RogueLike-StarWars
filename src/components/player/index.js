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
  const { t, i18n } = useTranslation()
  const [errorMessage, setErrorMessage] = useState('')
  const newProfile = useSelector(state => state.profile.profile)
  const returnMenuButton = t('ReturnMenuButton')
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

  useEffect(() => {
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
        <AlertMessage>{errorMessage}</AlertMessage>
        <SubmitInput type='submit' value={t('ValidForm')}></SubmitInput>
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

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
`
const PlayerTitle = styled.span`
  margin: 10px 0px;
  font-weight: bold;
`
const Form = styled.form``
const InputPlayer = styled.input`
  border-radius: 15px;
  padding: 2px 5px;
  margin: 5px 0px;
`
const SubmitInput = styled.input`
  margin-top: 5px;
  border: ${props => props.theme.border} solid 1px;
  padding: 4px 6px;
  border-radius: 10px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`
const AlertMessage = styled.p`
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
