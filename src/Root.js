import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers/comments';
import reduxPromise from 'redux-promise'

export default ({ children, initialState = {} }) => {
  // Functional component with ES6 destructuring and default value for initialState
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  )
  return (
    <Provider store={store}>
      {children}
      {/* ^ Used to wrap other components */}
    </Provider>
  );
};
