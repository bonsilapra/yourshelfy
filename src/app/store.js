import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { counterReducer } from '../features/counter/counterSlice'
import { userReducer } from '../features/user/userSlice'
import { shelfReducer } from '../features/shelf/shelfSlice'


const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  shelf: shelfReducer
}) 

const persistConfig = {
  key: 'root',
  storage,
  // debug: false
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())
  let persistor = persistStore(store)
  return { store, persistor }
}