
import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';



function App() {
  let [Todos, setTodos] = useState([{task: "sample task", id: uuidv4()}])
  let [NewTodo, setNewTodo] = useState("");

  let updateTodo = (event)=>{
    setNewTodo(event.target.value)
  }
  let addNewTodo = ()=>{
  
    setTodos([...Todos,{task : NewTodo, id: uuidv4()}])
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
                <li key={todo.id} >{todo.task}</li>
              )
            )}
        </ul>

    </>
  )
}

export default App
