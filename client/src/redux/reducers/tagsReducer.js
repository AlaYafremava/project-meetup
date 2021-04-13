import { INIT_TAGS } from '../actionTypes/actionTypes'

const initialState = { tags: [] }

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TAGS:
      console.log(action.payload);
      return { ...state, tags: action.payload }

    default:
      return state
  }
}

export default tagsReducer
