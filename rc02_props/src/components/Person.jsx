import Name from "./Name"



const Person = (props) => {
  return (
    <div>
       
  <Name/>
   <img src={props.img} alt="" />
   <p>Color:{props.color}</p>
   
   
    </div>
  )
}

export default Person
