import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer.js';
import './index.css';
import App from './components/App.js';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


