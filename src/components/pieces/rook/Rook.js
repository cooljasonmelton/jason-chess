import React from 'react';

// redux
import { connect } from 'react-redux';

// gameplay funcs
import clearAvFromBoard from '../../../helperFuncs/gameplayFuncs/clearAvFromBoard'

// components
import PieceImg from '../../board/PieceImg'


const Rook = props => {
  // const [clicked, setClicked] = useState(false)
  const { piece, sqNum, updateBoard, updateClickSq } =  props
  const { board, turn, clickSq } = props.state

  const clickRook = () => {
    // copy of board
    const editBoard = clearAvFromBoard([...board])
    
    // if Rook already clicked, clear av squares
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
    let [iRight, iDown, iLeft, iUp] = [true, true, true, true]
    for (let i=1; i<7; i++){
      if(iRight && (fileP+i < 8)){
        let iRightSq = editBoard[rankP][fileP+i]
        // if open sq
        if (!iRightSq) editBoard[rankP][fileP+i] = "av"
        // if white piece
        if (iRightSq && iRightSq.charAt(0) === getTurn) iRight = false
        // if black piece
        if (iRightSq && iRightSq.charAt(0) === oppColor) {
          iRight = false
          editBoard[rankP][fileP+i] = iRightSq + "cp"
        }
      }
      if(iDown && (rankP+i < 8)){
        let iDownSq = editBoard[rankP+i][fileP]
        // if open sq
        if (!iDownSq) editBoard[rankP+i][fileP] = "av"
        // if white piece
        if (iDownSq && iDownSq.charAt(0) === getTurn) iDown = false
        // if black piece
        if (iDownSq && iDownSq.charAt(0) === oppColor) {
          iDown = false
          editBoard[rankP+i][fileP] = iDownSq + "cp"
        }
      }
      if(iLeft && (fileP-i >= 0)){
        let iLeftSq = editBoard[rankP][fileP-i]
        // if open sq
        if (!iLeftSq) editBoard[rankP][fileP-i] = "av"
        // if white piece
        if (iLeftSq && iLeftSq.charAt(0) === getTurn) iLeft = false
        // if black piece
        if (iLeftSq && iLeftSq.charAt(0) === oppColor) {
          iLeft = false
          editBoard[rankP][fileP-i] = iLeftSq + "cp"
        }
      }
      if(iUp && (rankP-i >= 0)){
        let iUpSq = editBoard[rankP-i][fileP]
        // if open sq
        if (!iUpSq) editBoard[rankP-i][fileP] = "av"
        // if white piece
        if (iUpSq && iUpSq.charAt(0) === getTurn) iUp = false
        // if black piece
        if (iUpSq && iUpSq.charAt(0) === oppColor) {
          iUp = false
          editBoard[rankP-i][fileP] = iUpSq + "cp"
        }
      }         
    }
      
      // update board 
      updateBoard(editBoard)
    }

  return (
    <div className="Rook cfb" onClick={clickRook}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Rook);





