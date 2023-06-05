import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import { store } from './store/store';
import './scss/custom.scss';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
