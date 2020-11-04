export default function clickSq(state = { 
    clickSq: null
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