import React from 'react';

// redux
import { connect } from 'react-redux';

// styling
import './Info.css';

// components

const Info = props => {
    const { turn, win } = props.state;
  
    return (
        <div className="Info">
            <h1>White Player Name:</h1>
            <h1>Black Player Name:</h1>
            <h1>Turn: {turn ? "White":"Black"}</h1>
            {win ? `${win}` : ""}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: {
            turn: state.turn.turn,
            win: state.win.win 
        }        
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updateBoard: board => dispatch({ type: 'UPDATE_BOARD', payload: board }),
//         updateTurn: turn => dispatch({ type: 'UPDATE_TURN', payload: turn }),
//         updateTurn: win => dispatch({ type: 'UPDATE_WIN', payload: win }),
//     };
// };
export default connect(mapStateToProps)(Info);




