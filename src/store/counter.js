import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
};

// you can use state++ when using createSlice and redux toolkit because it doesn't allow state to mutate by default.
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

//don't mutate state when using redux, always return a new state when using redux
//mutating state can lead to bad bugs that hard to track and fix
//never mutate state!!!!!

// const counterReducer = (state = initalState, action) =>{
//     if(action.type === 'increment') return {counter: state.counter + 1, showCounter: state.showCounter};
//     if(action.type === 'increase') return {counter: state.counter + action.amount, showCounter: state.showCounter};
//     if(action.type === 'decrement') return {counter: state.counter - 1, showCounter: state.showCounter};
//     if(action.type === 'toggle') return {showCounter: !state.showCounter, counter: state.counter};
//     return state;
// }