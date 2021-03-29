export const goMenuButton = history => {
  history.push('/')
}
export const goLeaderBoardButton = history => {
  history.push('/leaderboards')
}

export const startActionButton = history => {
  localStorage.removeItem('isAlreadyAdd')
  localStorage.setItem('step', 1)
  history.push('/profile')
}
