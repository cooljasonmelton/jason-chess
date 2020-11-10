import React from 'react';

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

    // black or white?
    let getTurn = turn ? "w" : "b"
    let oppColor = !turn ? "w" : "b"

    // don't run if not turn
    if (piece.charAt(0) === oppColor) return

    // find piece rank and file 
    let fileP = sqNum % 8
    let rankP = Math.floor(sqNum / 8)

    
    // following for-loop starts from piece sq and runs
    // outward setting av move sqs until it hits piece
    // then it assigns capture or just sets condition  
    // to stop running loop in that direction
    let [riDo, riUp, leDo, leUp] = [true, true, true, true]
    for (let i=1; i<7; i++){
      if(riDo && (rankP+i < 8) && (fileP+i < 8)){
        let riDoSq = editBoard[rankP+i][fileP+i]
        // if open sq
        if (!riDoSq) editBoard[rankP+i][fileP+i] = "av"
        // if white piece
        if (riDoSq && riDoSq.charAt(0) === getTurn) riDo = false
        // if black piece
        if (riDoSq && riDoSq.charAt(0) === oppColor) {
          riDo = false
          editBoard[rankP+i][fileP+i] = riDoSq + "cp"
        }
      }
      if(riUp && (rankP-i >= 0) && (fileP+i < 8)){
        let riUpSq = editBoard[rankP-i][fileP+i]
        // if open sq
        if (!riUpSq) editBoard[rankP-i][fileP+i] = "av"
        // if white piece
        if (riUpSq && riUpSq.charAt(0) === getTurn) riUp = false
        // if black piece
        if (riUpSq && riUpSq.charAt(0) === oppColor) {
          riUp = false
          editBoard[rankP-i][fileP+i] = riUpSq + "cp"
        }
      }
      if(leDo && (rankP+i < 8) && (fileP-i >= 0)){
        let leDoSq = editBoard[rankP+i][fileP-i]
        // if open sq
        if (!leDoSq) editBoard[rankP+i][fileP-i] = "av"
        // if white piece
        if (leDoSq && leDoSq.charAt(0) === getTurn) leDo = false
        // if black piece
        if (leDoSq && leDoSq.charAt(0) === oppColor) {
          leDo = false
          editBoard[rankP+i][fileP-i] = leDoSq + "cp"
        }
      }
      if(leUp && (rankP-i >= 0) && (fileP-i >= 0)){
        let leUpSq = editBoard[rankP-i][fileP-i]
        // if open sq
        if (!leUpSq) editBoard[rankP-i][fileP-i] = "av"
        // if white piece
        if (leUpSq && leUpSq.charAt(0) === getTurn) leUp = false
        // if black piece
        if (leUpSq && leUpSq.charAt(0) === oppColor) {
          leUp = false
          editBoard[rankP-i][fileP-i] = leUpSq + "cp"
        }
      }         
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





