import transactions from './transactions';
import posts from './posts';
import { combineReducers } from 'redux'

export default combineReducers({
    transactions,
    posts
})