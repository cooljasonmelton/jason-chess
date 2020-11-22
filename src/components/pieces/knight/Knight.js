import React from 'react';

// redux
import { connect } from 'react-redux';

// gameplay funcs
import clearAvFromBoard from '../../../helperFuncs/gameplayFuncs/clearAvFromBoard'

// components
import PieceImg from '../../board/PieceImg'


const Knight = props => {
    // const [clicked, setClicked] = useState(false)
    const { piece, sqNum, updateBoard, updateClickSq } =  props
    const { board, turn, clickSq } = props.state

    const clickKnight = () => {
        // copy of board
        const editBoard = clearAvFromBoard([...board])

        // if Knight already clicked, clear av squares
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

        const setMoveSqs = (sq, rankM, fileM) => { 
          if (!sq) editBoard[rankP + rankM][fileP + fileM] = 'av'
          if (sq && sq.charAt(0) === oppColor) editBoard[rankP + rankM][fileP + fileM] = sq + 'cp'
        }

        if (rankP+2 < 8) {
          if (fileP+1 < 8) setMoveSqs(editBoard[rankP+2][fileP+1], 2, 1)
          if (fileP-1 >= 0) setMoveSqs(editBoard[rankP+2][fileP-1], 2, -1)  
        }
        if (rankP-2 >= 0) {
          if (fileP+1 < 8) setMoveSqs(editBoard[rankP-2][fileP+1], -2, 1)
          if (fileP-1 >= 0) setMoveSqs(editBoard[rankP-2][fileP-1], -2, -1)  
        }
        if (rankP+1 < 8) {
          if (fileP+2 < 8) setMoveSqs(editBoard[rankP+1][fileP+2], 1, 2)
          if (fileP-2 >= 0) setMoveSqs(editBoard[rankP+1][fileP-2], 1, -2)
        }
        if (rankP-1 >= 0) {
          if (fileP+2 < 8) setMoveSqs(editBoard[rankP-1][fileP+2], -1, 2)
          if (fileP-2 >= 0) setMoveSqs(editBoard[rankP-1][fileP-2], -1, -2)
        }

        // update board 
        updateBoard(editBoard)
    }
    

    return (
        <div className="Knight cfb" onClick={clickKnight}>
          <PieceImg piece={piece}/>
        </div>
    );
};

const mapStateToProps = state => {
  return {
    state: {
      board: state.board.board,
      clickSq: state.clickSq.clickSq,
      turn: state.turn.turn,
    }        
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: board => dispatch({ type: 'UPDATE_BOARD', payload: board }),
    updateClickSq: clickSq => dispatch({ type: 'UPDATE_SQUARE', payload: clickSq }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Knight);





