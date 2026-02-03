import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [Todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), done: false },
  ]);
  const [NewTodo, setNewTodo] = useState("");

  const addNewTodo = () => {
    if (NewTodo.trim() === "") return;
    setTodos([...Todos, { task: NewTodo, id: uuidv4(), done: false }]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  const upperCaseOne = (id) => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task.toUpperCase() }
          : todo
      )
    );
  };

  const upperCaseAll = () => {
    setTodos(Todos.map((todo) => ({
      ...todo,
      task: todo.task.toUpperCase(),
    })));
  };

  const toggleDone = (id) => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>📝 Todo App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a task..."
          value={NewTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addNewTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {Todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className={todo.done ? "done" : ""}>{todo.task}</span>

            <div className="actions">
              <button onClick={() => upperCaseOne(todo.id)}>⬆️</button>
              <button onClick={() => deleteTodo(todo.id)}>❌</button>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>

      <button className="upper-btn" onClick={upperCaseAll}>
        Uppercase All
      </button>
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import './App.css'
// import { v4 as uuidv4 } from 'uuid';



// function App() {
//   let [Todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), done: false }])
//   let [NewTodo, setNewTodo] = useState("");

//   let updateTodo = (event) => {
//     setNewTodo(event.target.value)
//   }
//   let addNewTodo = () => {

//     setTodos([...Todos, { task: NewTodo, id: uuidv4() }])
//     setNewTodo("")
//   }
//   let deleteTodo = (id) => {
//     let newTodo = Todos.filter((todo) => todo.id != id);
//     setTodos([...newTodo])
//   }

//   let upperCaseAll = () => {
//     setTodos(() =>
//       Todos.map((todo) => {
//         return {
//           ...todo, task: todo.task.toUpperCase()
//         }
//       })
//     )

//   }
//   let upperCaseOne = (id) => {
//     setTodos(() =>
//       Todos.map((todo) => {
//         if (todo.id == id) {
//           return {
//             ...todo, task: todo.task.toUpperCase()
//           }
//         }
//         else {
//           return todo
//         }
//       })
//     )

//   }

//   let count = 1;
//   let radioClick = (id) => {


    
      
//       setTodos(Todos.map((todo)=>{
//          if (todo.id === id) {
//         return { ...todo, done: !todo.done };
//       }
//       return todo;
//       }))
      
    
  
   
//   }
//   return (
//     <>
//       <input type="text" value={NewTodo} onChange={updateTodo} />
//       <br />

//       <button onClick={addNewTodo}>Add Task</button>

//       <br /><br /><br /><br />
//       <hr />

//       <h2>Todo Tasks</h2>

//       <ul>
//         {
//           Todos.map((todo) => (
//             <li key={todo.id} id={todo.id} >
//             <span style={{textDecoration: todo.done ? "line-through" : "none"}}>
//               {todo.task}
//             </span>
//               <span >
                 
//                  &nbsp;&nbsp;
//                 <button onClick={() => { deleteTodo(todo.id) }}>Delete Task</button>
//                 &nbsp; &nbsp;
//                 <button onClick={() => { upperCaseOne(todo.id) }}>UpperCase Task Task</button>
//                 <input type="radio" checked={todo.done}  onClick={()=>{
//                   radioClick(todo.id)
//                 }} />
//               </span>  
//             </li>
//           )
//           )}
//       </ul>
//       <button onClick={upperCaseAll}>Uppercase</button>

//     </>
//   )
// }

// export default App
