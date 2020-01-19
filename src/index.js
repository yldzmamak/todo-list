import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import * as serviceWorker from './serviceWorker';
import { store, persistor } from './redux/configureStore';

import './index.css';

const Init = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <RouterProvider basename="/todo">
          <App />
        </RouterProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

ReactDOM.render(<Init />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
