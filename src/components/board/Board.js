import React from 'react';

// styling
import './Board.css';

const Board = () => {
    const boardArr = [...new Array(64)]

    return (
        <div className="Board">
            {boardArr.map((sq, i) => <div key={i} className="square cfb"> sq </div>)}
        </div>
    );
}

export default Board;
