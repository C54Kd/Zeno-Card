import { createSlice } from '@reduxjs/toolkit';



const modalSlice = createSlice({
    name: 'modal',
    initialState: {value:false},
    reducers: {
        onModal: (state, action) => {
            state.value = (!state.value)
        }
    }

})

export const { onModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.value;

export default modalSlice.reducer;

