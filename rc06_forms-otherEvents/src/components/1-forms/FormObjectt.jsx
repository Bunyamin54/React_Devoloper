import { useState } from "react"


const FormObjectt = () => {

const [formData, setFormData] = useState ({

  username:"",
  email:"",
  password:""
})


 const { username, email, password} = formData

  const handleSubmit = (e) => {
    console.log(e.target)
    e.preventDefault()
  }

const handleFormData = (e) => {
  // console.log(e.target.value)
  // console.log(e.target.name)
  setFormData({...formData, [e.target.id]:e.target.value })
}
  return <div className="container mt-4">

    <h2 className="text-center text-success">Form Object In React</h2>
  <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="username" className="form-label">
      Hello, {formData.username}
    </label>
    <input
      type="email"
      className="form-control"
      id="username"
      aria-describedby="emailHelp"
      onChange={handleFormData} 
      value={username}
      
      
      // OnChange event i input degeri her degistiginde tetiklenir. 
    />
   
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email address: <span className="text-danger">{email}</span>
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      aria-describedby="emailHelp"
      onChange={handleFormData} 
      value={email}
      // inline
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="password"
      onChange={(e) => handleFormData(e.target.value) } 
    />
  </div>
  <div className="text-center"> 
  <button type="submit" className="btn btn-success">
    Submit
  </button>
  </div>
</form>
  </div>
}


export default FormObjectt