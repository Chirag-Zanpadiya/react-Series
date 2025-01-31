import React from "react";
import { useContext, createContext } from "react";

export const TodoContext = createContext({
  // ek todo item to hoga nahi esliye array of the todo le rahe hai
  // below is the consider as the variable

  todos: [
    // har ek todo pass below variables hoge
    {
      // jo help karegi hame todo item ko add , remove karne keliye
      id: 1,
      // todo tittle
      todo: " todo msg ",
      // todo ka checkbox check hoga tab ham usme edit nahi kar payege
      completed: false,
    },
  ],

  // below the methods of the todo

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
