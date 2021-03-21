import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
// import { hashHistory } from 'react-router';
// https://egghead.io/lessons/react-react-router-router-route-and-link

import { rootReducer } from './reducers/rootReducer.js';
import './index.css';
import App from './components/App.js';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
// console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


