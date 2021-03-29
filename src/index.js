import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthProvider} from './contexts/authContext'
import {AdvertisementsProvider} from './contexts/adveristmentContext'
import {ThemeProvider} from '@material-ui/core'
import FacebookMetaChange from './utils/FacebookMetaChange'
import {theme} from './utils/theme'

// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.7rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   },
// };


let app = 
<ThemeProvider theme={theme}>
  <AuthProvider>
    <AdvertisementsProvider>
      {/* <FacebookMetaChange /> */}
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

