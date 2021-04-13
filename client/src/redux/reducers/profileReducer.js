import { INIT_USER, UPDATE_USER, INIT_TAGS } from '../actionTypes/actionTypes'

const initialState = { user: {} }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, user: action.payload }

    case UPDATE_USER:
      console.log(action.payload);
      return { ...state, user: action.payload.user }

    case INIT_TAGS:
      console.log(action.payload);
      return { ...state, tags: action.payload.user.tags }

    default:
      return state
  }
}

export default profileReducer
