import React from 'react'

const Events = () => {
   let message = "Events"
  const handleClick= (e) =>{
    alert("Hei")
    console.log(e)
  }

    const handleChange =() => {
       message = "State"   
    }
  return (
    <div>
        <h1>{message}</h1>

     
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("deneme")}>Save</button>
      <button  onClick={handleChange}>Change</button>
   
    </div>
  )
}

export default Events
