import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';

// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
// The Store is the thing that brings it all together: it represents the state by using the rootReducer, any middleware (Thunk in our case), and allows you to actually dispatch actions.
// For using Redux in React, the <Provider /> component wraps the entire application and passes the storedown to all children.

const Root = ({ children, initialState = {} }) => {
  // Functional component with ES6 destructuring and default value for initialState
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise, thunk));
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
