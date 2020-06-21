import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header.js';
import App from './App';
import { Header } from './Header.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);
