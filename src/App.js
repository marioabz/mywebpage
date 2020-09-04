import React from 'react';
import Core from './core.js';
import Itm from "./itm.js";
import {Helmet} from "react-helmet"
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{style: 'background-color : #f4f8fc'}}/>
      <Core />
      <Itm />
    </div>
  );
}

export default App;
