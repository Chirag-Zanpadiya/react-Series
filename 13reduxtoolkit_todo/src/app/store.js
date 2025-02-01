import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore(
    {

        // store ko batana padega ki kaha sare reducers hai
        reducer : todoReducer,
    }
)
