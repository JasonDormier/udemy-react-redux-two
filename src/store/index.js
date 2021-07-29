import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth'; 


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
    //reducer: counterSlice.reducer // if you only have one reducer
});



export default store;
