import { createSlice } from '@reduxjs/toolkit';



const statSlice = createSlice({
    name: 'stat',
    initialState: {value:[70,70,70,70]},
    reducers: {
        changeStat: (state, action) => {
            state.value = action.payload;
        }
    }

})

export const { changeStat } = statSlice.actions;

export const selectStat = (state) => state.stat.value;

export default statSlice.reducer;

