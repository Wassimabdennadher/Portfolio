import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//  D:\projects\portfolio\node_modules\bootstrap\dist\css\bootstrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css'
//D:\projects\portfolio\node_modules\bootstrap\dist\js\bootstrap.bundle.min.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

