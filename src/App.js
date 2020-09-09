import './style/App.css';
import React from 'react';
import {Helmet} from "react-helmet"
import Core from './components/core.js';
import Contact from "./components/contact.js"
import InfoContainer from "./components/infoContainer.js"
import ToolsContainer from "./components/toolsContainer.js"

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{style: 'background-color : #f4f8fc'}}>
        <title>Mario Briseño</title>
      </Helmet>
      <Core />
      <InfoContainer />
      <ToolsContainer />
      <Contact />
    </div>
  );
}

export default App;
