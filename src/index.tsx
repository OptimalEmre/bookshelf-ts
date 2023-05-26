import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupWorker } from 'msw';
import { mockHandlers } from './msw/handlers';

import 'bootstrap/dist/css/bootstrap-reboot.css';

if (process.env.NODE_ENV === 'development') {
  const worker = setupWorker(...mockHandlers);
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
