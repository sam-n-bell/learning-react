import React from 'react';
import TransactionLayout from './Containers/TransactionLayout'
import PostLayout from './Containers/PostLayout';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <TransactionLayout />
      <PostLayout/>
    </Provider>
  );
}

export default App;
