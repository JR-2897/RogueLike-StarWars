import { getPlanetList } from '../actions/planetList'
import { updateProfile } from '../actions/profile'
import { getStarshipList } from '../actions/starshipList'
import { resetProfile } from '../actions/profile'

export const initGame = async (dispatch, history, profile) => {
  await dispatch(getPlanetList())

  dispatch(updateProfile(profile))

  history.push('/spacetravel')
}

export const initProfile = async (dispatch, history) => {
  await dispatch(getStarshipList())

  dispatch(resetProfile())

  history.push('/profile')
}

export const submitProfileForm = (
  e,
  name,
  faction,
  starshipName,
  rebelStarships,
  empireStarships,
  setStarship,
  t,
  setErrorMessage,
  dispatch,
  history
) => {
  e.preventDefault()
  if (!name) {
    setErrorMessage(t('ErrorMessageName'))
    return
  }
  if (!starshipName) {
    setErrorMessage(t('ErrorMessageStarship'))
    return
  }
  let starshipSelected = {}
  if (faction === 'Rebel') {
    starshipSelected = rebelStarships.find(x => x.name === starshipName)
  } else {
    starshipSelected = empireStarships.find(x => x.name === starshipName)
  }
  const profile = {
    name: name,
    starship: starshipSelected,
    credit: 1000,
    counterHD: 3,
    faction: faction,
    visitedPlanets: 0,
    crew: 1
  }
  initGame(dispatch, history, profile)
}
