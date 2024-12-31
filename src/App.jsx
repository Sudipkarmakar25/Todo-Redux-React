import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {
  
  return (
    <>
    
      <AddTodo />
      <Todos />
    </>
  )
}

export default App