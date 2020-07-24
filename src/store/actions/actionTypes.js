const transactionActions = {
    ADD_TRANSACTION: 'ADD_TRANSACTION',
    DELETE_TRANSACTION: 'DELETE_TRANSACTION',
}

const postActions = {
    GET_POSTS: 'GET_POSTS',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_FAILURE: 'GET_POSTS_FAILURE'
}

export default Object.freeze({
    transactionActions,
    postActions
})