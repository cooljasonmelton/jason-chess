import React from 'react';

// styling
import './Bishop.css';

// redux
import { connect } from 'react-redux';

// gameplay funcs
import clearAvFromBoard from '../../../helperFuncs/gameplayFuncs/clearAvFromBoard'

// components
import PieceImg from '../../board/PieceImg'


const Bishop = props => {
    // const [clicked, setClicked] = useState(false)
    const { piece, sqNum, updateBoard, updateClickSq } =  props
    const { board, turn, clickSq } = props.state

    const clickBishop = () => {
      // copy of board
      const editBoard = clearAvFromBoard([...board])
      
      // if bishop already clicked, clear av squares
      if (clickSq === sqNum) return updateClickSq(null) && updateBoard(editBoard)
      updateClickSq(sqNum)

      // WHITE BISHOP   
      if (turn && piece.charAt(0) === 'w') {
        let fileP = sqNum % 8
        let rankP = Math.floor(sqNum / 8)
        let [riDo, riUp, leUp, leDo] = [true, true, true, true]
        for (let i=1; i<7; i++){
          if((riDo && rankP+i < 8) && (fileP+i < 8)){
            let riDoSq = editBoard[rankP+i][fileP+i]
            // if open sq
            if (!riDoSq) editBoard[rankP+i][fileP+i] = "av"
            // if white piece
            if (riDoSq && riDoSq.charAt(0) === "W") riDo = false
            // if black piece
            if (riDoSq && riDoSq.charAt(0) === "b") {
              riDo = false
              editBoard[rankP+i][fileP+i] = riDoSq + "cp"
            }
          }
          if((riUp && rankP-i >= 0) && (fileP+i < 8)){
            let riUpSq = editBoard[rankP-i][fileP+i]
            // if open sq
            if (!riUpSq) editBoard[rankP-i][fileP+i] = "av"
            // if white piece
            if (riUpSq && riUpSq.charAt(0) === "W") riUp = false
            // if black piece
            if (riUpSq && riUpSq.charAt(0) === "b") {
              riUp = false
              editBoard[rankP-i][fileP+i] = riUpSq + "cp"
            }
          }
          if((rankP+i < 8) && (fileP-i >= 0)){
            console.log(editBoard[rankP+i][fileP-i])
          }
          if((rankP-i >= 0) && (fileP-i >= 0)){
            console.log(editBoard[rankP-i][fileP-i])
          }         
        }
      }

      // BLACK BISHOP
      if (!turn && piece.charAt(0) === 'b') {    

      }
      // update board 
      updateBoard(editBoard)
    }

    return (
        <div className="Bishop cfb" onClick={clickBishop}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Bishop);





