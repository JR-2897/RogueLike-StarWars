import { getPlanetList } from '../actions/planetList'
import { updateProfile } from '../actions/profile'
import { getStarshipList } from '../actions/starshipList'
import { resetProfile } from '../actions/profile'
import { skipPlanetActionInShopButton } from './funcRouteButton'

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
  localStorage.setItem('step', 2)
  initGame(dispatch, history, profile)
}

export const verifEndGame = (visitedPlanets, history, hasLost) => {
  console.log(visitedPlanets)
  if (visitedPlanets >= 10 || hasLost) {
    localStorage.setItem('step', 3)
    history.push('/gameover')
  }
}

export const buyItem = (
  e,
  type,
  profile,
  cost,
  quantity,
  setMessage,
  history,
  dispatch
) => {
  e.preventDefault()
  if (profile.credit < cost) {
    setMessage('Not enough credit')
    return
  }
  let newProfile = profile
  switch (type) {
    case 'crew':
      newProfile = {
        ...profile,
        crew: addCrew(profile.crew, quantity, profile.starship.maxCapacity),
        credit: profile.credit - cost
      }
      break
    case 'hyperdrive':
      newProfile = {
        ...profile,
        counterHD: profile.counterHD + quantity,
        credit: profile.credit - cost
      }
      break
    case 'starship':
      break
    default:
      setMessage('Unknow item type')
      return
  }
  dispatch(updateProfile(newProfile))
  skipPlanetActionInShopButton(history, dispatch, profile.visitedPlanets)
}

export const addCrew = (crew, quantity, maxCapacity) => {
  let newCrew = crew + quantity
  if (newCrew > maxCapacity) newCrew = maxCapacity
  return newCrew
}
