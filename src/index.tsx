import React from 'react';
import ReactDOM from 'react-dom/client';
import { SetTable } from './cpmponents/Table/SetTable';
// import { BasicTable } from './cpmponents/Table/Basic';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Table Filter</h1>
    <SetTable />
  </React.StrictMode>
);
