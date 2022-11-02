import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BasicTable } from './cpmponents/Basic'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BasicTable/>
  </React.StrictMode>
);
