import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

import './css/mdb.min.css'
import './js/mdb.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);