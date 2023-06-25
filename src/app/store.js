import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from '../features/modal/modalSlice';
import curWeatherReducer from '../features/curWeather/curWeatherSlice';
import statReducer from '../features/stat/statSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    curWeather: curWeatherReducer,
    stat: statReducer
  },
});
