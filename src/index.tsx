import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SetTable } from './cpmponents/Basic'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Table Filter</h1>
    <SetTable />
  </React.StrictMode>
);
