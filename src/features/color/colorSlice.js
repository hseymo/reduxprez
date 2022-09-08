import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    color: '#C0C0C0', 
}

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload;
        },
        resetColor: (state) => {
            state.color = '#C0C0C0';
        }
    }
})

export const { changeColor, resetColor } = colorSlice.actions;

export default colorSlice.reducer;