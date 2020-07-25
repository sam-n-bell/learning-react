import actions from '../actions/actionTypes'


const initialState = {
    payload: [],
    loading: false,
    error: null
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case actions.postActions.GET_POSTS:
            return {
                ...state,
                loading: true,
                payload: [],
                error: null
            }
        case actions.postActions.GET_POSTS_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                loading: false,
                error: null
            }
        case actions.postActions.GET_POSTS_FAILURE:
            return {
                ...state,
                payload: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default posts;