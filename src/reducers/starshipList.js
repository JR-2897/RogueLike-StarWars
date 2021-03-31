import {
  UPDATE_REBELSTARSHIPLIST,
  UPDATE_EMPIRESTARSHIPLIST
} from '../actions/starshipList'

const initialState = {
  RebelList: [],
  EmpireList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REBELSTARSHIPLIST:
      return {
        RebelList: [...state.RebelList, action.payload],
        EmpireList: [...state.EmpireList]
      }
    case UPDATE_EMPIRESTARSHIPLIST:
      return {
        RebelList: [...state.RebelList],
        EmpireList: [...state.EmpireList, action.payload]
      }
    default:
      return state
  }
}
