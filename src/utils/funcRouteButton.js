import { incPlanets, updateProfile } from '../actions/profile'
import { initProfile } from './funcScreens'

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

export const pastPlanetActionButton = dispatch => {
  dispatch(incPlanets())
}

export const useHyperDriveActionButton = (dispatch, profile, setMessage) => {
  if (profile.counterHD > 0) {
    const tmp = { ...profile, counterHD: profile.counterHD - 1 }
    dispatch(updateProfile(tmp))
  } else {
    setMessage("Don't have Hyper Drive")
  }
}
