export default function turn(state = { win: null }, action) {
    switch (action.type) {
        case 'UPDATE_WIN':
            return { 
                win: action.payload,
            };
        default:
            return state;
    }  
}