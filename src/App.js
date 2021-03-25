import React from 'react'
import { Provider } from 'react-redux'
// import ThemeProvider from 'styled-components'

import { store } from './configs/store'
// import {theme} from './configs/theme'
import Routes from './configs/router'

import './configs/translations'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <div className='App'>
        <Routes />
      </div>
      {/* </ThemeProvider> */}
    </Provider>
  )
}

export default App
