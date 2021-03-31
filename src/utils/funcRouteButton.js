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
