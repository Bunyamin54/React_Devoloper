import React from 'react'

const Events = () => {

  const handleClick= (e) =>{
    alert("Hei")
    console.log(e)
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("deneme")}>Save</button>
    </div>
  )
}

export default Events
