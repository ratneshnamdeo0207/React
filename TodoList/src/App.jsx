
import { useState } from 'react'
import './App.css'

function App() {
  let [Todos, setTodos] = useState(["sample task"])
  let [NewTodo, setNewTodo] = useState("");

  let updateTodo = (event)=>{
    setNewTodo(event.target.value)
  }
  let addNewTodo = ()=>{
    setTodos([...Todos, NewTodo])
    setNewTodo("")
  }

  
  return (
    <>
        <input type="text" value={NewTodo} onChange={updateTodo}/>
        <br />
        <button onClick={addNewTodo}>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <h2>Todo Tasks</h2>
        <ul>
          {
            Todos.map((todo)=> (
                <li>{todo}</li>
              )
            )}
        </ul>

    </>
  )
}

export default App
