import { createSlice } from '@reduxjs/toolkit';



const CurWeatherSlice = createSlice({
    name: 'curWeather',
    initialState: {value:''},
    reducers: {
        changeWeather: (state, action) => {
            state.value = action.payload;
        }
    }

})

export const { changeWeather } = CurWeatherSlice.actions;

export const selectCurWeather = (state) => state.curWeather.value;

export default CurWeatherSlice.reducer;

