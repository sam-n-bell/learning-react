import actions from './actionTypes'
import axios from '../../axios';


// instead of doing type and payload objects in dispatches below, could create additional functions above and use them

export const getPosts = () => {
    return async dispatch => {
        try {
            dispatch({
                type: actions.postActions.GET_POSTS
            })
            const request = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({
                type: actions.postActions.GET_POSTS_SUCCESS,
                payload: request.data.slice(0,3)
            })
        } catch (error) {
            dispatch({
                type: actions.postActions.GET_POSTS_FAILURE,
                payload: error.message
            })
        }
    }
}