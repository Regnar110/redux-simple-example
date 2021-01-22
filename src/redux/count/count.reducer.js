const INITIAL_COUNT_STATE = {
    count: 0
}

const countReducer = (prevState = INITIAL_COUNT_STATE, action) => {
    switch ( action.type ) {
        case 'SET_CURRENT_COUNT':
            return {
                ...prevState,
                count: action.payload
            }
        default:
            return prevState;
    }
}

export default countReducer;