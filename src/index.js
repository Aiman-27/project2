import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
ReactDOM.render(
  React.createElement('div',null, "Hello World with Create Element"),
  <div>Hello World</div>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <div><App name="Aiman Nadeem" age={27} isReactDeveloper={true}/></div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (fyor example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
