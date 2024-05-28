const initialState = 0;

const reducer = (state, action) => {
    if(action.type === 'INC') {
        return state+1;
    } else if (action.type === 'DEC') {
        return state-1;
    }else if(action.type === 'INCBY5') {
        return state + action.payload;
    }else {
        throw new Error('Invalid action type!');
    }
}


export {initialState, reducer};