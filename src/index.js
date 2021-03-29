import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthProvider} from './contexts/authContext'
import {AdvertisementsProvider} from './contexts/adveristmentContext'
import {ThemeProvider} from '@material-ui/core'
import {theme} from './utils/theme'


let app = 
<ThemeProvider theme={theme}>
  <AuthProvider>
    <AdvertisementsProvider>
      <App />
    </AdvertisementsProvider>
  </AuthProvider>
</ThemeProvider>

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

