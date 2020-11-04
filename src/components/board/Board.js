import React from 'react';

// redux
import { connect } from 'react-redux';

// styling
import './Board.css';

// helper funcs 
import isEven from '../../helperFuncs/generalFuncs/isEven'
import clearAvFromBoard from '../../helperFuncs/gameplayFuncs/clearAvFromBoard'

// components
import PieceImg from './PieceImg'
import Pawn from '../pieces/pawn/Pawn';

const Board = props => {
    // board: array of arrays 
    // turn: true for white, false for black
    // win: null, black, or white
    const { board, turn, clickSq } = props.state;
    const { updateTurn, updateBoard } = props

    // returns string of classnames for square
    const squareClass = (index, piece) => {
        const classArr = ["cfb"]

        // rank even, file odd OR rank odd, file even --> dark square
        const rank = isEven(Math.floor(index/8))
        const file = isEven(index % 8)
        if ((rank && !file) || (!rank && file)) classArr.push("dark")

        // indicate clickable piece
        let isTurn = turn ? "w" : "b"
        if (piece && piece.charAt(0) === isTurn) classArr.push("has-p")
        return classArr.join(" ")
    };

    const movePiece = toSq =>  {
        // clear available sq markers
        const editBoard = clearAvFromBoard([...board])

        // save piece code
        let piece = editBoard[Math.floor(clickSq/8)][clickSq % 8]

        // clear from-square of piece code
        editBoard[Math.floor(clickSq/8)][clickSq % 8] = null

        // update to-square with piece code
        editBoard[Math.floor(toSq/8)][toSq % 8] = piece

        // update board 
        updateBoard(editBoard)

        // update turn
        updateTurn(!turn)
    }
    
    const renderBoard = () => {
        let startNum = 0
        const counter = () => startNum++
        return board.map(rank => rank.map(sq => {
            let sqNum = counter()
            
            // available to move square
            if (sq === 'av'){
                return (
                    <div key={sqNum}
                        className={squareClass(sqNum, sq)}
                        onClick={() => movePiece(sqNum)}>
                        <PieceImg piece={sq ? sq : false}/>
                    </div>
                )
            }

            // render pawn
            if (sq === 'wp' || sq === 'bp'){
                return (
                    <div key={sqNum} 
                        className={squareClass(sqNum, sq)}>
                        <Pawn key={sqNum} piece={sq} sqNum={sqNum}/>                        
                    </div>
                )
            }

            // render bishop
            if (sq === 'wb' || sq === 'bb'){
                return (
                    <div key={sqNum} 
                        className={squareClass(sqNum, sq)}>
                        <Pawn key={sqNum} piece={sq} sqNum={sqNum}/>                        
                    </div>
                )
            }

            // render knight
            if (sq === 'wn' || sq === 'bn'){
                return (
                    <div key={sqNum} 
                        className={squareClass(sqNum, sq)}>
                        <Pawn key={sqNum} piece={sq} sqNum={sqNum}/>                        
                    </div>
                )
            }

            // render rook
            if (sq === 'wr' || sq === 'br'){
                return (
                    <div key={sqNum} 
                        className={squareClass(sqNum, sq)}>
                        <Pawn key={sqNum} piece={sq} sqNum={sqNum}/>                        
                    </div>
                )
            }

            // render queen
            if (sq === 'wq' || sq === 'bq'){
                return (
                    <div key={sqNum} 
                        className={squareClass(sqNum, sq)}>
                        <Pawn key={sqNum} piece={sq} sqNum={sqNum}/>                        
                    </div>
                )
            }

            // render king
            if (sq === 'wk' || sq === 'bk'){
                return (
                    <div key={sqNum} 
                        className={squareClass(sqNum, sq)}>
                        <Pawn key={sqNum} piece={sq} sqNum={sqNum}/>                        
                    </div>
                )
            }
            // render empty / null square
            return <div key={sqNum} className={squareClass(sqNum, sq)}></div>
        }))
    }

    return (
        <div className="Board">
            {renderBoard()}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: {
            board: state.board.board,
            clickSq: state.clickSq.clickSq,
            turn: state.turn.turn,
            win: state.win.win 
        }        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBoard: board => dispatch({ type: 'UPDATE_BOARD', payload: board }),
        updateTurn: turn => dispatch({ type: 'UPDATE_TURN', payload: turn }),
        updateWin: win => dispatch({ type: 'UPDATE_WIN', payload: win }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);