import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './configs/store'
import Routes from './configs/router'
import { getToken } from './configs/firebase'

import './configs/translations'
import './App.css'

function App() {
  useEffect(() => {
    getToken()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='App'>
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
