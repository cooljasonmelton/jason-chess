import React from 'react';

// styling
import './Pawn.css';

// redux
import { connect } from 'react-redux';

// components
import PieceImg from '../../board/PieceImg'


const Pawn = props => {
    const { piece } =  props
    const { board, turn } = props.state

    const clickPawn = () => {
        // return if not piece turn
        if (turn && piece.charAt(0) === 'b') return
        if (!turn && piece.charAt(0) === 'w') return

        // copy of board
        const updateBoard = [...board]

        // pawn can move two spaces

        // pawn can move one space

        // pawn can capture

        // pawn can en passant

        // pawn can promote
        
        console.log(piece)
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
        updateTurn: turn => dispatch({ type: 'UPDATE_TURN', payload: turn }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pawn);





