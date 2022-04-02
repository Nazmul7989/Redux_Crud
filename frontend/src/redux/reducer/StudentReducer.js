
const initialState = {
    students: [],
}

function studentReducer(state = initialState, action){
    switch (action.type) {
        case 'updateStudent':
            return {
                ...state,
                students: action.payload
            }

        default:
            return state
    }
}

export default studentReducer;