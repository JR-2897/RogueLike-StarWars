export const goMenuButton = history => {
  history.push('/')
}
export const goLeaderBoardButton = history => {
  history.push('/leaderboards')
}

export const startButton = history => {
  localStorage.removeItem('isAlreadyAdd')
  localStorage.addItem('step', 1)
  history.push('/profile')
}
