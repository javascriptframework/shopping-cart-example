import { combineReducers } from "redux";
import counterReducer from './counterReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    items: cartReducer,
})

export default rootReducer;
