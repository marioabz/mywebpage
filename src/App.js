import React from 'react';
import Core from './components/core.js';
import Itm from "./components/itm.js";
import {Helmet} from "react-helmet"
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{style: 'background-color : #f4f8fc'}}>
        <title>Mario Briseño</title>
      </Helmet>
      <Core />
      <Itm />
    </div>
  );
}

export default App;
