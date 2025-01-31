import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm() {
  // yaha me mera kam hai hi input me jo bhi value aye
  // use trace karke addTodo function ko bhej dena hai

  // ye state basically todo ke title ko dikhata hia
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if(!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

// chai aur code

// function TodoForm() {
//   const [todo, setTodo] = useState("");
//   const { addTodo } = useTodo();

//   const add = (e) => {
//     e.preventDefault();

//     if (!todo) return;

//     addTodo({ todo, completed: false });
//     setTodo("");
//   };

//   return (
//     <form onSubmit={add} className="flex">
//       <input
//         type="text"
//         placeholder="Write Todo..."
//         className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
//       >
//         Add
//       </button>
//     </form>
//   );
// }

// export default TodoForm;
// // chai aur code
