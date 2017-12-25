import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import configureStore from './store/configureStore.dev';
import DevTools from './DevTools/DevTools';
import Routes from './routes';
// import './css/master.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

render(
  <Provider store={store}>
    <DevTools />
  </Provider>,
  document.getElementById('devtools'),
);
