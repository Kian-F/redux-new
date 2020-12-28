const loggedReducer = (state=false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
            case 'DECREMENT':
            return state - 1
    }
}
export default loggedReducer