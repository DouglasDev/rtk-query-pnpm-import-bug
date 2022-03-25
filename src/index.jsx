import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

//this works sometimes:
import '@reduxjs/toolkit';
//this never works:
import '@reduxjs/toolkit/query';
//produces error: "Error: Package "immer" not found. Have you installed it?"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
