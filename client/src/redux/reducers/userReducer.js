import { SIGNUP, LOGIN, LOGOUT, INIT_USER, CHANGE_VISIBILITY_USER } from '../actionTypes/actionTypes'

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
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('app_state')
      return { ...state, user: {}, isAuth: false }
      
      case INIT_USER:
        return { ...state, user: action.payload }

    case CHANGE_VISIBILITY_USER:
      return { ...state, user: {...state.user, visibility: action.payload} }


    default:
      return state
  }
}

export default userReducer
