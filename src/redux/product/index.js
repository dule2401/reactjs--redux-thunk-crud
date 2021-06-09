import { combineReducers } from "redux";
import ProductReducer from "./productReduces";

const rootReducer = combineReducers({
    product: ProductReducer,
});

export default rootReducer;