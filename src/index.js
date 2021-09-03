import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import MyDocument from './components/MyDocument/MyDocument';
import reportWebVitals from './reportWebVitals';
import ReactPDF from '@react-pdf/renderer';

// ReactPDF.render(<MyDocument />, `${__dirname}./my-document.pdf`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
