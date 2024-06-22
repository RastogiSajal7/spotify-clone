import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeComponent: 'discover',
};

const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        setActiveComponent: (state, action) => {
            state.activeComponent = action.payload;
        },
    },
});

export const {setActiveComponent} = componentSlice.actions;
export default componentSlice.reducer;