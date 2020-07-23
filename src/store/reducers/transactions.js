import types from '../actions/actionTypes'

const transasctions = (state = [], action) => {
    switch (action) {
        case (types.transactions.ADD_TRANSACTION):
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default transasctions