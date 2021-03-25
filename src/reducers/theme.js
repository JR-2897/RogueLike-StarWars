import { UPDATE_THEME } from "../actions/theme"


const initialState = {
  style : 'dark_theme'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return {
        style: action.payload
      }
    default:
      return state
  }
}