import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import App from './App';
import PageNotFound from './ui/PageNotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        fallback={<PageNotFound />}
        onReset={() => window.location.replace('/')}
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
