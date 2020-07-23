import types from '../actions/actionTypes'

const transactions = (state = [], action) => {
    switch (action.type) {
        case (types.transactions.ADD_TRANSACTION):
            const id = state.length + 1;
            action.payload.id = id;
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default transactions