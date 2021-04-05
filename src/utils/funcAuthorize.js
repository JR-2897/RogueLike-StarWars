export const accessAuthorize = (history, step) => {
  let currentStep = localStorage.getItem('step')
  if (!currentStep) currentStep = 0
  if (currentStep != step) history.push('/')
}
