import actions from '../actions/actionTypes'

const transactions = (state = [], action) => {
    switch (action.type) {
        case (actions.transactionActions.ADD_TRANSACTION):
            const id = state.length + 1;
            action.payload.id = id;
            return [
                ...state,
                action.payload
            ]
        case (actions.transactionActions.DELETE_TRANSACTION):
            // payload is the tx id
            const filtered = [...state].filter(tx => tx.id !== action.payload)
            return filtered
        default:
            return state
    }
}

export default transactions