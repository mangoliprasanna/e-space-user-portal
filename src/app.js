import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';


import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import Router from './routes';
import { AuthProvider } from './context/AuthContext';
import themes from './themes';


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
