export default function turn(state = { turn: true }, action) {
    switch (action.type) {
        case 'UPDATE_TURN':
            return { 
                turn: action.payload.turn,
            };
        default:
            return state;
    }  
}