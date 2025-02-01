import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    // yaha wo action.patlouad hai jo todoSlice me addTodo fns ke andar text mei automatically insert kardega 
    dispatch(addTodo(input))


    setInput('');
  };
  return (
    <>
      <form onSubmit={addTodoHandler} className="flex space-x-2 mb-4 w-full">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
