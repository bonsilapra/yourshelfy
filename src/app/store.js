import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session' 
import { userReducer } from '../features/user/userSlice'
import { shelfReducer } from '../features/shelf/shelfSlice'


const rootReducer = combineReducers({
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
  let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  )
  let persistor = persistStore(store)
  return { store, persistor }
}