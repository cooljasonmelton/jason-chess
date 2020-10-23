import React from 'react';

// styling
import './App.css';

// components
import Navbar from './components/navbar/Navbar'
import Board from './components/board/Board'

const App = () => {
  return (
    <div className="App">
      <Navbar/>

      <div className="cfb">
        <Board/>
      </div>
      
    </div>
  );
}

export default App;
