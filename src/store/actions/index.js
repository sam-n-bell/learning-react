import types from './actionTypes';

export const addTransaction = payload => ({
    type: types.transactions.ADD_TRANSACTION,
    payload
})

