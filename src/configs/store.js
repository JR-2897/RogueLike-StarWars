import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunk //,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export let persistor = persistStore(store)
