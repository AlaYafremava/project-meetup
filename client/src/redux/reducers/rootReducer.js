import { combineReducers } from 'redux';
import mapReducer from './mapReducer';


const rootReducer = combineReducers({

  map: mapReducer,
})

export default rootReducer
