import { SIGNUP, LOGIN, LOGOUT } from '../actionTypes/actionTypes'

const initialState = { user: {}, isAuth: false }

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      // console.log(action.payload);
      return { ...state, user: action.payload.user, isAuth: true}

    case LOGIN:
      // console.log(action.payload);
      return { ...state, user: action.payload, isAuth: true }

    case LOGOUT:
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('app_state')
      return { ...state, user: {}, isAuth: false }
      

    default:
      return state
  }
}

export default authReducer
