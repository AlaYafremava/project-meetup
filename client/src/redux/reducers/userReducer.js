import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  INIT_USER,
  CHANGE_VISIBILITY_USER,
  UPDATE_USER,
  ADD_FRIEND,
  REMOVE_FRIEND,
  JOIN,
  UNJOIN,
} from '../actionTypes/actionTypes'

const initialState = { user: {}, isAuth: false }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      // console.log(action.payload);
      return { ...state, user: action.payload, isAuth: true }

    case LOGIN:
      // console.log(action.payload);
      return { ...state, user: action.payload, isAuth: true }

    case LOGOUT:
      window.localStorage.clear()
      return { ...state, user: {}, isAuth: false }

    case CHANGE_VISIBILITY_USER:
      return { ...state, user: { ...state.user, visibility: action.payload } }

    case INIT_USER:
      return { ...state, user: action.payload }

    case UPDATE_USER:
      // console.log(action.payload);
      return { ...state, user: action.payload.user }

    // case INIT_USER_TAGS:
    //   return { ...state, tags: action.payload }

    case ADD_FRIEND:
      return {
        ...state,
        user: { ...state.user, friends: [...new Set([...state.user.friends, action.payload])] },
      }

    case REMOVE_FRIEND:
      // console.log(state.user.friends.filter(el => el._id !== action.payload))
      return {
        ...state,
        user: {
          ...state.user,
          friends: state.user.friends.filter(el => el._id !== action.payload),
        },
      }

    case JOIN:
      return {
        ...state,
        user: {
          ...state.user,
          futureTravels: [...new Set([...state.user.futureTravels, action.payload])],
        },
      }

    case UNJOIN:
      return {
        ...state,
        user: {
          ...state.user,
          futureTravels: state.user.futureTravels.filter(el => el._id !== action.payload),
        },
      }

    default:
      return state
  }
}

export default userReducer
