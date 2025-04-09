import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

const goodsStore = configureStore({
    reducer: rootReducer,
});

export default goodsStore;