import { useState } from "react"


const KeyboardClipboard = () => {

 const [content, setContent] = useState("")

 const handleKeyDown = (e) => {
  if( e.keyCode >=48 && e.keyCode <=57) {
    alert("Please dont enter a number")
    e.preventDefault()
  }
 }

  return (
    <div className="container mt-4">


   <h2 className="text-center">Keyboard-Clipboard</h2>

   <input type="text" className="form-control"
    onChange={ (e) =>{
      e.target.value = e.target.value.toLocaleUpperCase()
      setContent (e.target.value)}}
      onKeyDown={handleKeyDown}
      value={content}
      
      
      
      />
  

 <div className="mt-4">
<h3>Copied Content</h3>
<p>{content.toLocaleLowerCase()}</p>

 </div>

    </div>
  )
}

export default KeyboardClipboard