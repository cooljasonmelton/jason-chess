export default function turn(state = { turn: true }, action) {
    switch (action.type) {
        case 'UPDATE_TURN':
            return { 
                turn: action.payload,
            };
        default:
            return state;
    }  
}