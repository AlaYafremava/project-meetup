import { SIGNUP, LOGIN, LOGOUT } from '../actionTypes/actionTypes'

const initialState = { user: '' }

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, user: action.payload._id }

    case LOGIN:
      // console.log(action.payload);
      return { ...state, user: action.payload._id }

    case LOGOUT:
      return { ...state, user: '' }

    default:
      return state
  }
}

export default authReducer
