export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const RESET_PROFILE = 'RESET_PROFILE'
export const INC_PLANETS = 'INC_PLANETS'

export const updateProfile = newProfile => ({
  type: UPDATE_PROFILE,
  payload: newProfile
})

export const resetProfile = () => ({
  type: RESET_PROFILE
})

export const incPlanets = () => ({
  type: INC_PLANETS
})
