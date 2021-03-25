import { UPDATE_PLANETLIST } from "../actions/planetList"

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLANETLIST:
      return {
        list: action.payload
      }
    default:
      return state
  }
}