import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        // increment reducer
        increment: (state, action) => {

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            state.value += 1
        },

        // decrement reducer
        decrement: (state, action) => {

            state.value -= 1

        },

        // increment by amount 
        incrementByAmount: (state, action) => {

            state.value += action.payload
        },

        // reset reducer
        reset: () => {
            return initialState
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
// export reducer

export default counterSlice.reducer;

