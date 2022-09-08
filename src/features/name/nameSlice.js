import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    first: 'no', 
    last: 'name'
}

const nameSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.first = action.payload.first;
            state.last = action.payload.last;
        },
    }
})

export const { updateName } = nameSlice.actions;

export default nameSlice.reducer;