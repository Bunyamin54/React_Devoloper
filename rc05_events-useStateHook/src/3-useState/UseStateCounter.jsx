import React from 'react'

const UseStateCounter = () => {
   let count = 0
  const handleInc = () => {
    count = count + 1
    console.log(count)
  }


  return (
    
     <div>
        <h2>Use State Hook</h2>
        <h1>Count:{count}</h1>
        <button onClick={handleInc}>INC</button>
        <button>CLR</button>
        <button>DEC</button>
      </div>
   
  )
}

export default UseStateCounter
