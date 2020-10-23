import React from 'react';

// styling
import './Board.css';

// components
import PieceImg from './PieceImg'

const Board = () => {
    const boardArr = [
        ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"]
    ]

    // takes num, returns true if even
    const isEven = n => n % 2 === 0;
     
    const squareClass = index => {
        const classArr = ["cfb"]
        // rank even, file odd OR rank odd, file even --> dark square
        const rank = isEven(Math.floor(index/8))
        const file = isEven(index % 8)
        if ((rank && !file) || (!rank && file)) classArr.push("dark")

        return classArr.join(" ")
    };

    const renderBoard = () => {
        let startNum = 0
        const counter = () => startNum++
        return boardArr.map(rank => rank.map(sq => {
            let sqNum = counter()
            return (
                <div key={sqNum} className={squareClass(sqNum)} onClick={console.log(sqNum)}>
                    <PieceImg piece={sq}/>
                </div>
            )}))
    }

    return (
        <div className="Board">
            {renderBoard()}
        </div>
    );
}

export default Board;
