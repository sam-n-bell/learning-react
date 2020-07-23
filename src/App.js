import React from 'react';
import TransactionLayout from './Containers/TransactionLayout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <TransactionLayout />
    </Provider>
  );
}

export default App;
