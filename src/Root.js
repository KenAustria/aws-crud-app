import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers/comments';

export default ({ children, initialState = {} }) => {
  // Functional component with ES6 destructuring and default value for initialState
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
      {/* ^ Used to wrap other components */}
    </Provider>
  );
};
