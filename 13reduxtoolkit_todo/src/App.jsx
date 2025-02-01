import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <AddTodo/>
  <Todos/> 
  </>
  )
}

export default App





// Haan, bilkul sahi! React ek independent library hai jo UI components banane ke liye use hoti hai, aur Redux bhi ek independent state management library hai. In dono ko connect karne ke liye React-Redux ka use hota hai.

