import React from 'react'
import { Provider } from 'react-redux'

import { store } from './configs/store'
import Routes from './configs/router'

import './configs/translations'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes />
      </div>
    </Provider>
  )
}

export default App
