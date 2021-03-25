import { combineReducers } from 'redux'
import profile from './profile'
import planeteList from './planeteList'
import starshipList from './starshipList'

export default combineReducers({
  profile,
  planeteList,
  starshipList
})