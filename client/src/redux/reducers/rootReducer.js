import { combineReducers } from 'redux'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import mapReducer from './mapReducer';
import travelReducer from "./travelReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  map: mapReducer,
  travels: travelReducer
})

export default rootReducer
