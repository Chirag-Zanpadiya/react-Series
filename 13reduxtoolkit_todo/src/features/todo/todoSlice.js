import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const todoSlice = createSlice({
  // ye help karega : redux web tool me
  name: "todo",

  //   initial state kya hai
  initialState,

  //   Haan, reducers Redux mein ek pure function hote hain jo
  // store ke andar state ko update karne ka kaam karte hain. Reducer function
  // ka kaam hota hai previous state ko action ke basis par update karna aur
  // new state return karna.
  reducers: {
    // State Redux ka single source of truth hoti hai.
    // Reducer ke andar state ka access hota hai jo current application state ko represent karta hai.
    // Action kya hota hai?
    // Action ek plain JavaScript object hota hai jo store ke andar state ko update karne ke liye reducer ko instruction deta hai.

    // Har action ke paas ek type hota hai (jo batata hai ki kya change karna hai).
    // Kabhi-kabhi payload bhi hota hai (jo extra data store ko bhejne ke liye hota hai).
    addTodo: (state, action) => {
      // add karne ke liye pehle todo create to karna padega
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // ab hamara initialState ke andar basically add karna hai
      state.todos.push(todo);
    },

    //   remover todo karne ke liye

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});



export const {addTodo  , removeTodo  , updateTodo} =  todoSlice.actions

// ye isliye kyuki store ko sirf register reducer  
export default  todoSlice.reducer