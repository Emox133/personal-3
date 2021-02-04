import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthProvider} from './contexts/authContext'

let app = <AuthProvider>
    <App />
</AuthProvider>

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

