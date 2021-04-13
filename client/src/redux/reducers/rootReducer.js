import { combineReducers } from 'redux'
import userReducer from './userReducer'
import profileReducer from './profileReducer'
import mapReducer from './mapReducer';
import travelReducer from "./travelReducer"

const rootReducer = combineReducers({
  user: userReducer,
  // profile: profileReducer,
  map: mapReducer,
  travels: travelReducer
})

export default rootReducer
