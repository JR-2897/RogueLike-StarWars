import { UPDATE_STARSHIPLIST } from "../actions/starshipList"

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STARSHIPLIST:
      return {
        list: action.payload
      }
    default:
      return state
  }
}