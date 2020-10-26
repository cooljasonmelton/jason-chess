import React from 'react';

// styling
import './Board.css';

// piece functions
import {clickPawn} from '../pieces/pawn/Pawn'

// components
import PieceImg from './PieceImg'

const Board = props => {
    const { board, setBoard, turn, setTurn } = props
    // takes num, returns true if even
    const isEven = n => n % 2 === 0;
    // returns string of classnames for square
    const squareClass = index => {
        const classArr = ["cfb"]
        // rank even, file odd OR rank odd, file even --> dark square
        const rank = isEven(Math.floor(index/8))
        const file = isEven(index % 8)
        if ((rank && !file) || (!rank && file)) classArr.push("dark")
        return classArr.join(" ")
    };

    // if piece clicked, determine piece and call correct func
    const clickPiece = (sq, num) => {
        // null sq, return
        if (!sq) return
        // if not turn, return
        if (turn && sq.charAt(0) === 'b') return
        if (!turn && sq.charAt(0) === 'w') return

        // white pawn
        if (sq === 'wp') clickPawn()
        // black pawn 
        if (sq === 'bp') clickPawn()
    }

    const renderBoard = () => {
        let startNum = 0
        const counter = () => startNum++
        return board.map(rank => rank.map(sq => {
            let sqNum = counter()
            return (
                <div key={sqNum} 
                    className={squareClass(sqNum)}
                    onClick={() => clickPiece(sq, sqNum)}>
                    <PieceImg piece={sq ? sq : false}/>
                </div>
            )
        }))
    }

    return (
        <div className="Board">
            {renderBoard()}
        </div>
    );
}

export default Board;
