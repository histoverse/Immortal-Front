import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout, LayoutRoutes } from './containers';
import { StoreProvider } from './hooks';

import './assets/main-styles/index.scss';

export const App = () => {
  return (
    <StoreProvider>
      <ToastContainer />
      <Router>
        <Suspense fallback={null}>
          <Layout>
            <LayoutRoutes />
          </Layout>
        </Suspense>
      </Router>
    </StoreProvider>
  );
};
