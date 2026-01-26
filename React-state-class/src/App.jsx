
import { useState } from 'react'
import './App.css'

function App() {
  
  let [count, setCount] = useState(0);

  function inCount()
  {
    setCount(count+1);
    console.log(count);

  }

  return (
    <div>
      <h2>State in React</h2>
      <p>Count: {count}</p>
      <button onClick={inCount} >Increase Count</button>
    </div>
  )
}

export default App
