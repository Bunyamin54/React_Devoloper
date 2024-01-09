import React from 'react'
import { useState } from 'react'

const UseStateCounter = () => {
  //  let count = 0  boyle yapmak yerine useState kullaniyoruz

  const [count, setCount] = useState(0)

  const handleInc = () => {
    // count = count + 1
    setCount(count +1)
  
  }

  const handleDesc = () => {
    // count = count + 1
    setCount(count -1)
  
  }

  return (
    
     <div>
        <h2>Use State Hook</h2>
        <h1>Count:{count}</h1>
        <button onClick={handleInc}>INC</button>
        <button onClick={handleDesc}>DEC</button>
        <button onClick={() => setCount (0)}>CLR</button>
      </div>
   
  )
}

export default UseStateCounter
