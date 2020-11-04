import React from 'react';

// redux
import { connect } from 'react-redux';

// styling
import './Board.css';

// move piece func 
import movePiece from '../../gameplayFuncs/movePiece'

// components
import PieceImg from './PieceImg'
import Pawn from '../pieces/pawn/Pawn';

const Board = props => {
    // board: array of arrays 
    // turn: true for white, false for black
    // win: null, black, or white
    const { board, turn } = props.state;

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
    
    const renderBoard = () => {
        let startNum = 0
        const counter = () => startNum++
        return board.map(rank => rank.map(sq => {
            let sqNum = counter()
            
            // available to move square
            if (sq === 'av'){
                return (
                    <div key={sqNum}
                        className={squareClass(sqNum)}
                        onClick={null}>
                        <PieceImg piece={sq ? sq : false}/>
                    </div>
                )
            }

            // render pawn
            if (sq === 'wp' || sq === 'bp'){
                return (
                    <div key={sqNum} 
                        className={squareClass(sqNum)}>
                        <Pawn key={sqNum} piece={sq} sqNum={sqNum}/>                        
                    </div>
                )
            }

            return (
                <div key={sqNum} 
                    className={squareClass(sqNum)}>
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

const mapStateToProps = state => {
    return {
        state: {
            board: state.board.board,
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