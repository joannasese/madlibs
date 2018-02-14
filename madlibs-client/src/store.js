import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import madlibs from './reducers/madlibs';
import madlibFormData from './reducers/madlibFormData';

const reducers = combineReducers({
  madlibs: madlibs,
  madlibFormData: madlibFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
