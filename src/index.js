import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
// import Profile from './profile/profile'
// import Statistics from './statistics/statistics'
// import user from './components/user.json'
// import data from './components/data.json'
import App from './app/app';

// по лекції це все моє робитись в файлі еп.джс в змінній App а в
// індексі вже рендериться тільки Арр, попробувати завтра
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
