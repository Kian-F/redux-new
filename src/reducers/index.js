import counterReducer from './counter';
import isLoggedReducer from './isLogged'
import {combinedReducers} from 'redux'

const allReducer = combinedReducers({
    counter : counterReducer,
    isLogged : isLoggedReducer
})