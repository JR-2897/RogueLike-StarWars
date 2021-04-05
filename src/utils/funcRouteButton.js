import { incPlanets, updateProfile } from '../actions/profile'
import EndGameComponent from '../components/endGameComponent'
import { initProfile, verifEndGame } from './funcScreens'

export const goMenuButton = history => {
  history.push('/')
}
export const goLeaderBoardButton = history => {
  history.push('/leaderboards')
}

export const startActionButton = (dispatch, history) => {
  localStorage.removeItem('isAlreadyAdd')
  localStorage.setItem('step', 1)
  initProfile(dispatch, history)
}

export const skipPlanetActionButton = (history, dispatch) => {
  dispatch(incPlanets())
  localStorage.setItem('step', 2)
  history.push('/spacetravel')
}

export const skipPlanetActionInShopButton = (
  history,
  dispatch,
  visitedPlanets
) => {
  console.log(visitedPlanets)
  dispatch(incPlanets())
  if (visitedPlanets >= 9) {
    localStorage.setItem('step', 3)
    history.push('/gameover')
  } else {
    localStorage.setItem('step', 2)
    history.push('/spacetravel')
  }
}

export const useHyperDriveActionButton = (dispatch, profile, setMessage) => {
  if (profile.counterHD > 0) {
    const tmp = {
      ...profile,
      counterHD: profile.counterHD - 1,
      visitedPlanets: profile.visitedPlanets + 1
    }
    dispatch(updateProfile(tmp))
  } else {
    setMessage("Don't have Hyper Drive")
  }
}

export const shopStarshipActionButton = history => {
  localStorage.setItem('step', 4)
  history.push('/shop')
}

export const restockActionButton = history => {
  localStorage.setItem('step', 4)
  history.push('/restock')
}
