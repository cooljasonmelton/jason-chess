import React from 'react';

// styling
import './Board.css';

const Board = () => {
    const boardArr = [...new Array(64)]

    const isEven = n => n % 2 === 0;
     
    const squareClass = index => {
        const classArr = ["cfb"]
        // rank even, file odd OR rank odd, file even --> dark square
        const rank = isEven(Math.floor(index/8))
        const file = isEven(index % 8)
        if ((rank && !file) || (!rank && file)) classArr.push("dark")

        return classArr.join(" ")
    };

    return (
        <div className="Board">
            {boardArr.map((sq, i) => <div key={i} className={squareClass(i)}> </div>)}
        </div>
    );
}

export default Board;
