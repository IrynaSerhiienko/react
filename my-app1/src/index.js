// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import state from './redux/state';

// const publicUrl = process.env.PUBLIC_URL;

// const currentUrl = window.location.href;
// console.log(`currentUrl: ${currentUrl}`); //  http://localhost:3000/react/profile/dialogs

// let appUrl = publicUrl;

// if (currentUrl.startsWith(publicUrl + '/profile')) {
//   alert('Hi profile');
//   appUrl = '/profile';
// }
// if (currentUrl.startsWith(publicUrl + '/dialogs')) {
//   alert('Hi dialogs');
//   appUrl = '/dialogs';
// }
// if (currentUrl.startsWith(publicUrl + '/news')) {
//   alert('Hi news');
//   appUrl = '/news';
// }
// if (currentUrl.startsWith(publicUrl + '/music')) {
//   alert('Hi music');
//   appUrl = '/music';
// }
// if (currentUrl.startsWith(publicUrl + '/settings')) {
//   alert('Hi settings');
//   appUrl = '/settings';
// }
// if (currentUrl.startsWith(publicUrl + '/fetch')) {
//   alert('Hi fetch');
//   appUrl = '/fetch';
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter basename={appUrl}>
//     <React.StrictMode>
//       <App state={state} />
//     </React.StrictMode>
//   </BrowserRouter>
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

// const publicUrl = process.env.PUBLIC_URL;
// const baseUrl = document.baseURI.substring(
//   0,
//   document.baseURI.indexOf('/', 10)
// );
// console.log(`publicUrl: ${publicUrl}`); //    /react
// console.log(`baseUrl: ${baseUrl}`); //    http://localhost:3000

// const currentUrl = window.location.href;
// console.log(`currentUrl: ${currentUrl}`); //  http://localhost:3000/react/profile/dialogs

// let appUrl = publicUrl;


// if (currentUrl.startsWith(baseUrl + `${publicUrl}/profile`)) {
//   alert('Hi profile');
//   appUrl = `${publicUrl}/profile`;
// }

// if (currentUrl.startsWith(baseUrl + `${publicUrl}/dialogs`)) {
//   alert('Hi dialogs');
//   console.log('Hi');
//   appUrl = `${publicUrl}/dialogs`;
// }

// if (currentUrl.startsWith(baseUrl + `${publicUrl}/news`)) {
//   alert('Hi news');
//   appUrl = `${publicUrl}/news`;
// }

// if (currentUrl.startsWith(baseUrl + `${publicUrl}/music`)) {
//   alert('Hi music');
//   appUrl = `${publicUrl}/music`;
// }

// if (currentUrl.startsWith(baseUrl + `${publicUrl}/settings`)) {
//   alert('Hi settings');
//   appUrl = `${publicUrl}/settings`;
// }
// if (currentUrl.startsWith(baseUrl + `${publicUrl}/fetch`)) {
//   alert('Hi fetch');
//   appUrl = `${publicUrl}/fetch`;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <HashRouter basename={appUrl}>
  <HashRouter>
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
