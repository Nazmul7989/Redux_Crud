
const initialState = {
    students: [],
}

function StudentReducer(state = initialState, action){
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

export default StudentReducer;