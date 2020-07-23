import actions from './actionTypes';

export const addTransaction = payload => ({
    type: actions.ADD_TRANSACTION,
    payload
})

export const deleteTransaction = payload => ({
    type: actions.DELETE_TRANSACTION,
    payload
})
