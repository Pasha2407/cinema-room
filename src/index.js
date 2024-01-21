import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/pro-movie-searcher">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
