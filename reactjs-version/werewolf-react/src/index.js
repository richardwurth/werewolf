import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './menu'
import Interface from './interface'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <Interface />,
  document.getElementById('the-button')
);
ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);
