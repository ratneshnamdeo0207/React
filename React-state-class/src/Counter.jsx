import { useState } from 'react'

export default function Counter()
{
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