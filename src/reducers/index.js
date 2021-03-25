import { combineReducers } from 'redux'
import profile from './profile'
import planeteList from './planeteList'
import starshipList from './starshipList'
import theme from './theme'

export default combineReducers({
  profile,
  planeteList,
  starshipList,
  theme
})