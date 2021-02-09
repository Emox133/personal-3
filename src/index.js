import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthProvider} from './contexts/authContext'
import {AdvertisementsProvider} from './contexts/adveristmentContext'

let app = 
<AuthProvider>
  <AdvertisementsProvider>
    <App />
  </AdvertisementsProvider>
</AuthProvider>

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

