import { combineReducers } from 'redux'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  map: mapReducer,
})

export default rootReducer
