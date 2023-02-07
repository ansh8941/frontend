import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { LinearProgress, Container, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HelmetProvider } from 'react-helmet-async';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const ContainerStyle = styled(Container)(() => ({
  right: '0px',
  left: '0px',
  bottom: '0px',
  zIndex: 9998,
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(255, 255, 255)',
  height: 'calc(100% - 92px)',
}));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <ContainerStyle maxWidth="sm">
          <LinearProgress color="inherit" sx={{ width: '100%' }} />
        </ContainerStyle>
      }
    >
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <CssBaseline>
              <App />
            </CssBaseline>
          </BrowserRouter>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </HelmetProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
