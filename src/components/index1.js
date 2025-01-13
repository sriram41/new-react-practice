import React, { useState } from 'react'

const Index1 = () => {

  const [count, setCount] = useState(0)
  
  const increment =() => {
    setCount(pev => pev+1)
  }
  const decrement =() => {
    setCount(pev => pev-1)
  }
  

    return (
      <div>
        <button onClick={increment}>+</button>
      <h1>{count}</h1>
        <button onClick={decrement}>-</button>
       
        <h1>total value</h1>
      </div>
    );
}

export default Index1