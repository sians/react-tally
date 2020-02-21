import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss';

import Router from "./navigation/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">      
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
