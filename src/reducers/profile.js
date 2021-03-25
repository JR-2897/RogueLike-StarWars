import { RESET_PROFILE, UPDATE_PROFILE } from "../actions/profile"

const initialState = { profile: {
name: '',
spaceship : {name: '',model: '', img: '', maxCapacity: 0 },
credit : 0,
counterHD : 0,
faction: '',
crewNb : 0
}}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { profile: {...state.profile, action.payload} }
    case RESET_PROFILE:
      return { profile: initialState}
    default:
      return state
  }
}