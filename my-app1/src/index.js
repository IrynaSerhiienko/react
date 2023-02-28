import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

const publicUrl = process.env.PUBLIC_URL;
const baseUrl = document.baseURI.substring(
  0,
  document.baseURI.indexOf('/', 10)
);
const currentUrl = window.location.href;
let appUrl = publicUrl;

if (currentUrl.startsWith(baseUrl + '/profile')) {
  appUrl = publicUrl + '/profile';
}
if (currentUrl.startsWith(baseUrl + '/dialogs')) {
  appUrl = publicUrl + '/dialogs';
}
if (currentUrl.startsWith(baseUrl + '/news')) {
  appUrl = publicUrl + '/news';
}
if (currentUrl.startsWith(baseUrl + '/music')) {
  appUrl = publicUrl + '/music';
}
if (currentUrl.startsWith(baseUrl + '/settings')) {
  appUrl = publicUrl + '/settings';
}
if (currentUrl.startsWith(baseUrl + '/fetch')) {
  appUrl = publicUrl + '/fetch';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={appUrl}>
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
