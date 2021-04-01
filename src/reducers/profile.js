import {
  RESET_PROFILE,
  UPDATE_PROFILE,
  INC_PLANETS,
  UPDATE_CREW
} from '../actions/profile'

const initialState = {
  profile: {
    name: '',
    starship: { name: '', model: '', img: '', maxCapacity: 0 },
    credit: 0,
    counterHD: 0,
    faction: '',
    crewNb: 0,
    visitedPlanets: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      //return { profile: {...state.profile, action.payload} }
      return {
        ...state,
        profile: action.payload
      }
    case RESET_PROFILE:
      return { profile: initialState }
    case INC_PLANETS:
      return {
        profile: {
          ...state.profile,
          visitedPlanets: state.profile.visitedPlanets + 1
        }
      }
    case UPDATE_CREW:
      return {
        profile: {
          ...state.profile,
          crewNb: action.payload
        }
      }
    default:
      return state
  }
}
