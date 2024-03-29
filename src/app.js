import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/index';
import Router from './routes';
import { AuthProvider } from './context/AuthContext';

export default function ESpaceUserPortal() {
  document.body.className = 'hold-transition skin-blue sidebar-mini';
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <Toaster />
        </Provider>
      </AuthProvider>
    </>
  );
}
