import React, {useState} from 'react';

// styling
import './Pawn.css';

// redux
import { connect } from 'react-redux';

// gameplay funcs
import clearAvFromBoard from '../../../helperFuncs/gameplayFuncs/clearAvFromBoard'

// components
import PieceImg from '../../board/PieceImg'


const Pawn = props => {
    const [clicked, setClicked] = useState(false)
    const { piece, sqNum, updateBoard, updateClickSq } =  props
    const { board, turn } = props.state

    const clickPawn = () => {
        updateClickSq(sqNum)

        // if already clicked, remove av sq (deselect)
        if (clicked){
            setClicked(false)
            return updateBoard(clearAvFromBoard([...board]))
        }
        else setClicked(true)

        // copy of board
        const editBoard = clearAvFromBoard([...board])

        // WHITE PAWN   
        if (turn && piece.charAt(0) === 'w') {
            // let square = editBoard[Math.floor((sqNum)/8)][sqNum % 8]
            let oneSquare = editBoard[Math.floor((sqNum-8)/8)][sqNum % 8]

            // pawn can move two spaces
            if (sqNum > 47 && sqNum < 56){
                let twoSquare = editBoard[Math.floor((sqNum-16)/8)][sqNum % 8]
                if (!twoSquare && !oneSquare) editBoard[Math.floor((sqNum-16)/8)][sqNum % 8] = "av"
            }
    
            // pawn can move one space
            if (!oneSquare) editBoard[Math.floor((sqNum-8)/8)][sqNum % 8] = "av"
    
            // pawn can capture
    
            // pawn can en passant
    
            // pawn can promote
        }

        // BLACK PAWN
        if (!turn && piece.charAt(0) === 'b') {    
           // let square = editBoard[Math.floor((sqNum)/8)][sqNum % 8]
           let oneSquare = editBoard[Math.floor((sqNum+8)/8)][sqNum % 8]

           // pawn can move two spaces
           if (sqNum > 7 && sqNum < 16){
               let twoSquare = editBoard[Math.floor((sqNum+16)/8)][sqNum % 8]
               if (!twoSquare && !oneSquare) editBoard[Math.floor((sqNum+16)/8)][sqNum % 8] = "av"
           }
           // pawn can move one space
           if (!oneSquare) editBoard[Math.floor((sqNum+8)/8)][sqNum % 8] = "av"

            // pawn can capture
    
            // pawn can en passant
    
            // pawn can promote
        }
        // update board 
        updateBoard(editBoard)
    }


    return (
        <div className="Pawn cfb" onClick={clickPawn}>
            <PieceImg piece={piece}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: {
            board: state.board.board,
            clickSq: state.clickSq.clickSq,
            turn: state.turn.turn,
        }        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBoard: board => dispatch({ type: 'UPDATE_BOARD', payload: board }),
        updateClickSq: clickSq => dispatch({ type: 'UPDATE_SQUARE', payload: clickSq }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pawn);





