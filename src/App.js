import React, {useState} from 'react';



// styling
import './App.css';

// components
import Navbar from './components/navbar/Navbar'
import Board from './components/board/Board'

const App = () => {

  // later move this to redux or something to make it available to whole app
  const [board, setBoard] = useState(
    [
      ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
      ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
      ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"]
    ]
  )
  // if true, white's turn
  const [turn, setTurn] = useState(true)

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
