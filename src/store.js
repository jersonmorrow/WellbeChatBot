// Import dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

// connect the aplication to Redux DevTools
import { composeWithDevTools } from 'redux-devtools-extension';

// Setup Initial state
const initialState = {};

// Import middleware
const middleware = [thunk];

// Setup store
const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Export
export default store;
