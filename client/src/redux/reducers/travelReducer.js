const initialState = { travels: [] }

const travelReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TRAVELS:
            return { ...state, travels: action.payload }

        case ADD_TRAVELS:
            return { ...state, travels: [...state.travels, action.payload ]}

        case DEL_TRAVELS:
            return { travels: [...state.travels].filter(el => el._id !== action.payload)}

        case EDIT_TRAVELS:
            return { ...state, travels: [...(state.travels.filter(el => el._id !== action.payload._id)), action.payload] }


        default:
            return state
    }
}

export default travelReducer