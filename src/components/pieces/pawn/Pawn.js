import React from 'react';

// styling
import './Pawn.css';

// redux
import { connect } from 'react-redux';

// components
import PieceImg from '../../board/PieceImg'


const Pawn = props => {
    const { piece, sqNum, updateBoard } =  props
    const { board, turn } = props.state

    const clickPawn = () => {
        // copy of board
        const editBoard = [...board]

        // WHITE PAWN   
        if (turn && piece.charAt(0) === 'w') {
            // pawn can move one or two spaces
            if (sqNum > 47 && sqNum < 56){
                let square = editBoard[Math.floor((sqNum)/8)][sqNum % 8]
                let oneSquare = editBoard[Math.floor((sqNum-8)/8)][sqNum % 8]
                let twoSquare = editBoard[Math.floor((sqNum-16)/8)][sqNum % 8]
                console.log(sqNum, sqNum - 8, sqNum - 16)
                console.log(square, oneSquare, twoSquare)
                if (!twoSquare && !oneSquare) editBoard[Math.floor((sqNum-16)/8)][sqNum % 8] = "av"
            }
    
            // pawn can move one space
    
            // pawn can capture
    
            // pawn can en passant
    
            // pawn can promote
        }

        // BLACK PAWN
        if (!turn && piece.charAt(0) === 'b') {    
            // pawn can move two spaces
    
            // pawn can move one space
    
            // pawn can capture
    
            // pawn can en passant
    
            // pawn can promote
        }
        // update board 
        updateBoard(editBoard)
    }


    return (
        <div className="Pawn" onClick={clickPawn}>
            <PieceImg piece={piece}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: {
            board: state.board.board,
            turn: state.turn.turn,
        }        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBoard: board => dispatch({ type: 'UPDATE_BOARD', payload: board }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pawn);





