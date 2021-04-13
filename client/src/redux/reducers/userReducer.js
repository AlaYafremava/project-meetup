import { SIGNUP, LOGIN, LOGOUT, INIT_USER } from '../actionTypes/actionTypes'

const initialState = { user: {}, isAuth: false }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      // console.log(action.payload);
      return { ...state, user: action.payload, isAuth: true}

    case LOGIN:
      // console.log(action.payload);
      return { ...state, user: action.payload, isAuth: true }

    case LOGOUT:
      window.localStorage.clear()
      return { ...state, user: {}, isAuth: false }
      
      case INIT_USER:
        return { ...state, user: action.payload }

    default:
      return state
  }
}

export default userReducer
