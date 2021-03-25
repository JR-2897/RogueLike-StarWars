import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { useSelector } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import { dark_theme, light_theme } from '../configs/theme'
import { createGlobalStyle } from 'styled-components'

import Header from '../components/header'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import SpaceTravel from '../screens/SpaceTravel'
import GameEnd from '../screens/GameOver'
import Leaderboards from '../screens/Leaderboards'

const Routes = () => {
  const style = useSelector(state => state.theme.style)
  return (
    <ThemeProvider theme={style}>
      <GlobalStyle />
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/spacetravel' component={SpaceTravel} />
          <Route exact path='/gameover' component={GameEnd} />
          <Route exact path='/leaderboards' component={Leaderboards} />

          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color : ${props => props.theme.background};
    color : ${props => props.theme.text};
  }
`

export default Routes
