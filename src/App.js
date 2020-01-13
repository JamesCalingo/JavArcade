import React from 'react';
import CardContainer from "./CardContainer"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header display-3">JavaScript Arcade!</div>
      <p>I like games. I've programmed quite a few of them and am constantly looking for more games to do.</p>
      <p>I've decided to curate all of those games into one place: this page. You can see all of the games I've made here.
      </p>
      <h1 className="mb-4">Enjoy!</h1>
      <CardContainer />
      <h1>...And more soon</h1>
    </div>
   
  );
}

export default App;
