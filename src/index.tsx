import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { App } from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store, persistentStore } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistentStore}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
