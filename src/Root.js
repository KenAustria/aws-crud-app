import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';
import PropTypes from 'prop-types';

const Root = ({ children, initialState = {} }) => {
  // Functional component with ES6 destructuring and default value for initialState
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  return (
    <Provider store={store}>
      {children}
      {/* ^ Used to wrap other components */}
    </Provider>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
Root.propTypes = {
  children: PropTypes.object,
  initialState: PropTypes.object,
};

// https://stackoverflow.com/questions/44582209/proptypes-in-functional-stateless-component
export default Root;
