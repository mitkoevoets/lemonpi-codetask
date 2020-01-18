import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './app/utils/history';
import { configureStore } from 'app/store';
import { Router } from 'react-router-dom';
import { App } from './app';
import { loadState } from 'app/utils/localStorage';

import './assets/css/general.css';

import './assets/css/theme-bluegrey.css'
import './assets/css/layout-moody.css'

// import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import 'react-vis/dist/style.css';

const savedState = loadState();

const store = configureStore(savedState);

const reactDiv = document.getElementById('react');

if (reactDiv) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    reactDiv,
  );
}
