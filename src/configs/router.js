import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import SpaceTravel from '../screens/SpaceTravel'
import GameEnd from '../screens/GameOver'
import Leaderboards from '../screens/Leaderboards'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/spacetravel' component={SpaceTravel} />
        <Route exact path='/gameover' component={GameEnd} />
        <Route exact path='/leaderboards' component={Leaderboards} />

        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
