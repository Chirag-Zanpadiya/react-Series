import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Context/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  // UI per reflect karane ke liye basically todos liye
  const [todos, setTodos] = useState([]);

  // addtodo wali methods ko implement karege
  const addTodo = (todo) => {
    // direct setTodos(todo) kar duga to prev sare todo clear karke ye wala todo override ho jayega

    // old todos sare spread ho jaye ge aur + new todo
    // yaha pe dekho ge to pata chalega ki todos me id aur name and completed wala status lena hai
    // yaha direct me value kato access nahi le sakta ho me todo :  value ko add kardeta magar yeto onchange evenet hai input e.target.valur wali
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, todo) => {
    // yaha pe pure todos to iterate karna padega

    setTodos((prevTodos) =>
      prevTodos.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevtodo) => prevtodo.id !== id));
  };

  // me chahata hu ki toggleComplete : check karu tab true ho jaye aur uncheck karu tab false
  // jo mujhe help karega jab check hoga tab mei text ko edited nahi kar sakta
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevtodo) =>
        prevtodo.id == id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  // ye useEffect basically tab use hota hai jab hame page reload kiya to pehle se jo todos hai wo rahe
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ek todo jam hame todo ko add karna ho

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

// chai aur cod
// chai aur code

export default App;

// # Understanding React Context API and Its Importance in React Projects

// ## 1. What is Context in React?
// React provides the **Context API** to share state and data across multiple components **without passing props manually at every level**. It helps in managing **global state** efficiently.

// ### Example:
// If you have a user authentication system and want to use the user’s data in multiple components (Navbar, Dashboard, Profile Page), using **Context API** prevents prop drilling.

// ---

// ## 2. Why Do We Need Context in a React Project?
// The **Context API** is useful for managing global state without needing third-party libraries like Redux.

// ### When Should You Use Context API?
// ✅ **User Authentication** – Manage user login state across components.
// ✅ **Theme Management** – Implement light/dark mode easily.
// ✅ **Language Support (i18n)** – Store and manage translations.
// ✅ **E-commerce Cart System** – Share cart data between different pages.
// ✅ **Global Notifications** – Manage alert messages across the application.

// ---

// ## 3. How to Use React Context API

// ### **Step 1: Create a Context**
// ```jsx
// import { createContext } from "react";
// export const UserContext = createContext(null);
// ```

// ### **Step 2: Create a Provider Component**
// ```jsx
// import { useState } from "react";
// import { UserContext } from "./UserContext";

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({ name: "Chirag", loggedIn: true });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;
// ```

// ### **Step 3: Wrap Your App with Provider**
// ```jsx
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import UserProvider from "./UserProvider";

// ReactDOM.render(
//   <UserProvider>
//     <App />
//   </UserProvider>,
//   document.getElementById("root")
// );
// ```

// ### **Step 4: Use Context in a Component**
// ```jsx
// import { useContext } from "react";
// import { UserContext } from "./UserContext";

// const Dashboard = () => {
//   const { user } = useContext(UserContext);

//   return <h1>Welcome, {user.name}!</h1>;
// };

// export default Dashboard;
// ```

// ---

// ## 4. Context API vs Props vs Redux
// | Feature           | Props | Context API | Redux |
// |------------------|--------|-------------|--------|
// | **Data Sharing** | Parent to Child | Global (Selected Components) | Global (Whole App) |
// | **State Management** | Local State | Small-Scale Global State | Large-Scale Global State |
// | **Performance** | Fast | Efficient | Optimized but Complex |
// | **Use Cases** | Simple Components | Medium Complexity (Auth, Theme) | Large Applications (Multiple Reducers) |

// ---

// ## 5. Should You Use Context API?
// - If your state **is needed in only a few components**, **use props**.
// - If your state **needs to be shared across multiple components**, **use Context API**.
// - If your application **is large with complex state management**, **consider Redux**.

// ---

// ## 6. Context API in Your React Project
// If you are building a:
// - **E-commerce Website** – Use Context for **Cart Management**.
// - **Authentication System** – Use Context for **User Authentication**.
// - **Dashboard** – Use Context for **Global Settings and Preferences**.
// - **Portfolio Website** – May not require Context unless managing a theme.

// Would you like help implementing Context API in your project? 🚀 //

// # **`deleteTodo` and `toggleComplete` Function Documentation**

// ## **Function Overview**
// ### **`deleteTodo` Function**
// The `deleteTodo` function is used to remove a specific to-do item from the list based on its unique `id`. It updates the state by filtering out the to-do item that matches the given `id`.

// ### **`toggleComplete` Function**
// The `toggleComplete` function is used to toggle the `completed` status of a to-do item. If a to-do is marked as completed, it will be changed to incomplete and vice versa.

// ## **Function Implementations**
// ### **`deleteTodo` Function**
// ```javascript
// const deleteTodo = (id) => {
//   setTodos((prevTodos) =>
//     prevTodos.filter((prevtodo) => prevtodo.id !== id)
//   );
// };
// ```

// ### **`toggleComplete` Function**
// ```javascript
// const toggleComplete = (id) => {
//   setTodos((prevTodos) =>
//     prevTodos.map((prevtodo) =>
//       prevtodo.id == id
//         ? { ...prevtodo, completed: !prevtodo.completed }
//         : prevtodo
//     )
//   );
// };
// ```

// ## **How They Work**
// ### **`deleteTodo` Function**
// 1. Takes an `id` as an argument, representing the to-do item to be deleted.
// 2. Calls `setTodos` to update the state.
// 3. Uses `filter()` to create a new array excluding the to-do with the matching `id`.
// 4. Updates the UI with the new to-do list.

// ### **`toggleComplete` Function**
// 1. Takes an `id` as an argument, representing the to-do item to toggle.
// 2. Calls `setTodos` to update the state.
// 3. Uses `map()` to iterate over the existing todos:
//    - If the `id` matches, it toggles the `completed` status (`true` ⇄ `false`).
//    - If not, it returns the todo unchanged.
// 4. Updates the UI with the modified to-do list.

// ## **Example Usage**
// ### **Initial To-Do List**
// ```json
// [
//   { "id": 1, "text": "Learn React", "completed": false },
//   { "id": 2, "text": "Build a project", "completed": false },
//   { "id": 3, "text": "Practice DSA", "completed": false }
// ]
// ```

// ### **Function Calls**
// ```javascript
// deleteTodo(2);
// toggleComplete(1);
// ```

// ### **Updated To-Do List After Operations**
// ```json
// [
//   { "id": 1, "text": "Learn React", "completed": true },
//   { "id": 3, "text": "Practice DSA", "completed": false }
// ]
// ```

// ## **Advantages of These Approaches**
// ✅ **Immutable Approach:** Creates new arrays instead of modifying the existing state directly.
// ✅ **Efficient & Readable:** Uses `filter()` for deletion and `map()` for toggling.
// ✅ **React-Friendly:** Ensures proper state updates, triggering UI re-renders correctly.

// ## **Usage in a React Component**
// If you're using these functions in a React component with buttons:
// ```jsx
// {todos.map((todo) => (
//   <div key={todo.id}>
//     <p>{todo.text}</p>
//     <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//     <button onClick={() => toggleComplete(todo.id)}>
//       {todo.completed ? "Mark Incomplete" : "Mark Complete"}
//     </button>
//   </div>
// ))}
// ```
// ### **Explanation:**
// - `todos.map()` iterates over the list and renders each to-do.
// - The delete button calls `deleteTodo(todo.id)`, removing the to-do.
// - The toggle button calls `toggleComplete(todo.id)`, updating its `completed` status.
// - The UI automatically reflects the changes.

// ## **Conclusion**
// The `deleteTodo` and `toggleComplete` functions efficiently manage to-do list state updates in a React application using Vite. These functions ensure smooth UI updates while following best practices in state management.
