import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Appcalc from './components/AppCalc/App';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Appcalc />
  </React.StrictMode>,
  document.getElementById('root')
);
