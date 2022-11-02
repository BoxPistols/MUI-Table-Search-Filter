import * as React from 'react';
import ReactDOM from 'react-dom/client';
// import { StyledEngineProvider } from "@mui/material/styles";
// import Demo from "./demo";
import { BasicTable } from './BasicTable';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <>
      <BasicTable />
      {/* <Demo /> */}
    </>
  </React.StrictMode>,
);
