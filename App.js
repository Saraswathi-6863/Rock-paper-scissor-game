import React, { useState } from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <Game />
    </div>
  );
}

export default App;