import { INIT_PEOPLE, INIT_PERSON } from '../actionTypes/actionTypes'

const initialState = { people: [] }

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PEOPLE:
      return { people: action.payload }

    default:
      return state
  }
}

export default peopleReducer
