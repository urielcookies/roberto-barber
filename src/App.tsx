import React from 'react';
import Routes from './components/routes';
import {BrowserRouter} from 'react-router-dom';


import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
  

export default App;
