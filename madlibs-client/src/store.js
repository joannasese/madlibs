import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';

//simple reducer
const madlibs = (state = [], action) => {
  switch(action.type) {
    case 'GET_MADLIBS_SUCCESS':
      return action.madlibs;
    default:
      return state;
  }
}

const reducers = combineReducers({
  madlibs: madlibs
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
