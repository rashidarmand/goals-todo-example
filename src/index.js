import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';
import middleware from './middleware/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
   document.getElementById('root')
);

