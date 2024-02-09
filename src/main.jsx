import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import PageNotFound from './ui/PageNotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        fallback={<PageNotFound />}
        onReset={() => window.location.replace('/')}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
