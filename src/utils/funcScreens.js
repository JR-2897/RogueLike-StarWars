import { useHistory } from 'react'
import { getPlanetList } from '../../actions/planetList'
import { updateProfile } from '../../actions/profile'

const history = useHistory()

export const initGame = (dispatch, profile) => {
  dispatch(getPlanetList())

  dispatch(updateProfile(profile))

  history.push('/spacetravel')
}

export const submitProfileForm = (
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
  const profile = {
    name: name,
    starship: starship,
    credit: 1000,
    counterHD: 3,
    faction: faction,
    crewNb: starship.maxCapacity
  }
  initGame(dispatch, profile)
}
