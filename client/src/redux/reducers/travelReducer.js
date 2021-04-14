import { INIT_TRAVELS, ADD_TRAVELS, DEL_TRAVELS, EDIT_TRAVELS, INIT_MY_TRAVELS } from "../actionTypes/actionTypes"

const initialState = { travels: [] }

const travelReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TRAVELS:
            return { ...state, travels: action.payload }

        case INIT_MY_TRAVELS:
            return { ...state, travels: action.payload }

        case ADD_TRAVELS:
            return { ...state, travels: [...state.travels, action.payload] }

        case DEL_TRAVELS:
            return { travels: [...state.travels].filter(el => el._id !== action.payload) }

        case EDIT_TRAVELS:
            return { ...state, travels: [...(state.travels.filter(el => el._id !== action.payload._id)), action.payload] }


        default:
            return state
    }
}

export default travelReducer