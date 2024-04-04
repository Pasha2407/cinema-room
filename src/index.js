import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/cinema-room">
    <React.StrictMode>
      <Suspense>
        <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
