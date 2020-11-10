import React from 'react';

// redux
import { connect } from 'react-redux';

// gameplay funcs
import clearAvFromBoard from '../../../helperFuncs/gameplayFuncs/clearAvFromBoard'

// components
import PieceImg from '../../board/PieceImg'


const Pawn = props => {
    // const [clicked, setClicked] = useState(false)
    const { piece, sqNum, updateBoard, updateClickSq } =  props
    const { board, turn, clickSq } = props.state

    const clickPawn = () => {
        // copy of board
        const editBoard = clearAvFromBoard([...board])
        
        // if pawn already clicked, clear av squares
        updateClickSq(sqNum)
        if (clickSq === sqNum) return updateClickSq(null) && updateBoard(editBoard)

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
            let capLeftSq = editBoard[Math.floor((sqNum)/8)-1][(sqNum % 8)-1]
            let capRightSq = editBoard[Math.floor((sqNum)/8)-1][(sqNum % 8)+1]
            if (capLeftSq && capLeftSq.charAt(0) === "b") editBoard[Math.floor((sqNum)/8)-1][(sqNum % 8)-1] = capLeftSq + "cp"
            if (capRightSq && capRightSq.charAt(0) === "b") editBoard[Math.floor((sqNum)/8)-1][(sqNum % 8)+1] = capRightSq + "cp"

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
            let capLeftSq = editBoard[Math.floor((sqNum)/8)+1][(sqNum % 8)-1]
            let capRightSq = editBoard[Math.floor((sqNum)/8)+1][(sqNum % 8)+1]
            if (capLeftSq && capLeftSq.charAt(0) === "w") editBoard[Math.floor((sqNum)/8)+1][(sqNum % 8)-1] = capLeftSq + "cp"
            if (capRightSq && capRightSq.charAt(0) === "w") editBoard[Math.floor((sqNum)/8)+1][(sqNum % 8)+1] = capRightSq + "cp"

    
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





