import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: 'no name', 
}

const nameSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
    }
})

export const { updateName } = nameSlice.actions;

export default nameSlice.reducer;