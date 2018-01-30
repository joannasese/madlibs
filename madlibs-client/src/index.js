import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';


// The Provider is a component that comes from our React Redux library. 
// It wraps around our App component. It does two things for us.
// The first is that it will alert our Redux app when there has been a
// change in state, and this will re-render our React app.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();
