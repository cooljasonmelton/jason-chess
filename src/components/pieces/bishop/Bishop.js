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
      console.log(sqNum)
      // copy of board
      const editBoard = clearAvFromBoard([...board])
      
      // if bishop already clicked, clear av squares
      updateClickSq(sqNum)
      if (clickSq === sqNum) return updateClickSq(null) && updateBoard(editBoard)

      // WHITE BISHOP   
      if (turn && piece.charAt(0) === 'w') {

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





