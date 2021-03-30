import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthProvider} from './contexts/authContext'
import {AdvertisementsProvider} from './contexts/adveristmentContext'
import {ThemeProvider} from '@material-ui/core'
import {theme} from './utils/theme'
import { hydrate, render } from "react-dom";

let app = 
<ThemeProvider theme={theme}>
  <AuthProvider>
    <AdvertisementsProvider>
      <App />
    </AdvertisementsProvider>
  </AuthProvider>
</ThemeProvider>

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// ReactDOM.render(
//   <React.StrictMode>
//     {app}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

