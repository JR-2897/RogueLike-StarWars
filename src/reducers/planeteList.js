import { UPDATE_PLANETELIST } from "../actions/planeteList"

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLANETELIST:
      return {
        list: action.payload
      }
    default:
      return state
  }
}