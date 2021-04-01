import {
  UPDATE_REBELSTARSHIPLIST,
  UPDATE_EMPIRESTARSHIPLIST
} from '../actions/starshipList'

const initialState = {
  list: { RebelList: [], EmpireList: [] }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REBELSTARSHIPLIST:
      return {
        list: {
          RebelList: [...state.list.RebelList, action.payload],
          EmpireList: [...state.list.EmpireList]
        }
      }
    case UPDATE_EMPIRESTARSHIPLIST:
      return {
        list: {
          RebelList: [...state.list.RebelList],
          EmpireList: [...state.list.EmpireList, action.payload]
        }
      }
    default:
      return state
  }
}
