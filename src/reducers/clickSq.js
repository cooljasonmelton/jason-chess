export default function clickSq(state = { 
    clickSq: 64
}, action) {
    switch (action.type) {
        case 'UPDATE_SQUARE':
            return { 
                clickSq: action.payload,
            };
        default:
            return state;
    }  
}