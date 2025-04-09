import { combineReducers } from "redux";
import goodsReducer from "./goodsSlice";

const rootReducer = combineReducers({
    goods: goodsReducer,
});

export default rootReducer;