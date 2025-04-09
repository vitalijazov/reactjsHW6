import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goods: [
        { id: 1, name: "Макароны", description: "Макфа по акции", price: 54, available: true },
        { id: 2, name: "Шоколад", description: "Бабаевский с миндалем", price: 120, available: true },
        { id: 3, name: "Сосиски", description: "Вязанка 500 гр.", price: 200, available: true },
    ],
    current:
        { id: "", name: "", description: "", price: 0, available: false }
};

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        add: (state, action) => {
            state.goods = [...state.goods, {
                id: Date.now(),
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price,
                available: action.payload.available
            }];
        },
        remove: (state, action) => {
            state.goods = state.goods.filter((item) => item.id != action.payload);
        },
        changeAvailable: (state, action) => {
            state.goods.filter((item) => item.id == action.payload).forEach((item) => item.available = !item.available);
        },
        change: (state, action) => {
            state.goods = state.goods.filter((item) => item.id != action.payload[0].id);
            state.current = {
                id: action.payload[0].id,
                name: action.payload[0].name,
                description: action.payload[0].description,
                price: action.payload[0].price,
                available: action.payload[0].available
            };
        }
    }
});

export const { add, remove, changeAvailable, change } = goodsSlice.actions;
export default goodsSlice.reducer; 