import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var books = 
  [{title : "2001", author:"him",category: "sci-fi", owned: true},{title:"blue monday",author:"her",category:"mystery", owned: false}];

ReactDOM.render(<App books = {books} />, document.getElementById('root'));
registerServiceWorker();
