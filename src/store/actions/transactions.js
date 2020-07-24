import actions from './actionTypes';

export const addTransaction = payload => ({
    type: actions.transactionActions.ADD_TRANSACTION,
    payload
})

export const deleteTransaction = payload => ({
    type: actions.transactionActions.DELETE_TRANSACTION,
    payload
})
