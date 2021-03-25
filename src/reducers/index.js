import { combineReducers } from 'redux'
import profile from './profile'
import planetList from './planetList'
import starshipList from './starshipList'
import theme from './theme'

export default combineReducers({
  profile,
  planetList,
  starshipList,
  theme
})
