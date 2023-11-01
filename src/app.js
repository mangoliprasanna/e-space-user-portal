import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider, useSelector } from 'react-redux';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import themes from './themes';

import Router from './routes';
import { AuthProvider } from './context/AuthContext';

export default function ESpaceUserPortal() {
  const customization = useSelector((state) => state.customization);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <AuthProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
              <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
