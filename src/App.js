import React from 'react';

// styling
import './App.css';

// components
import Navbar from './components/navbar/Navbar'
import Board from './components/board/Board'
import Info from './components/info/Info'

const App = () => {

  return (
    <div className="App">
      <Navbar/>

      <div className="info-board-c"> 
        <Info/>
        <Board/>
      </div>


    </div>
  );
}

export default App;
