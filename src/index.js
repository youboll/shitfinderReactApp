import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <link rel="icon" href="/shit.svg" sizes="16x16" type="image/png"/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="player" element={<App/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
