import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionComp from './components/function';
import ClassComp from './components/class';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='container'>
      <FunctionComp />
      <ClassComp />
    </div>
  </React.StrictMode>
);

reportWebVitals();
