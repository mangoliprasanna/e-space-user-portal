import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ESpaceUserPortal from './app';
import store from './redux/index';

ReactDOM.render(
  <Provider store={store}>
    <ESpaceUserPortal />
  </Provider>, document.getElementById('root'));
