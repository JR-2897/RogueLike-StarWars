import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { logger } from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk /* , logger */))
)
export let persistor = persistStore(store)
