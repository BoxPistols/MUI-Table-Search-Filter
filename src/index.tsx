import { Divider, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { OnTableFilter } from './cpmponents/Table/OnTableFilter';
import { SetTable } from './cpmponents/Table/SetTable';
import { CustomTheme } from './theme/schemes/CustomTheme';

// import { BasicTable } from './cpmponents/Table/Basic';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <h1>Table Filter</h1>
      <h2>OnTableFilte</h2>
      <OnTableFilter />
      <Divider sx={{ mt: 4, mb: 4 }} />
      <h2>SetTable</h2>
      <SetTable />
    </ThemeProvider>
  </React.StrictMode>
);
