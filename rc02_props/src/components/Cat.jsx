import Name from "./Name"



const Cat = ({name,img,color= "grey"}) => {   //! hava desturctiring yapmak
    // const Person = (props) => {
//   const {name,img,color} = props  //! desturcuring methods 

  return (
    <div>
       
   <Name name= {name}/>
   <img src={img} alt="" />
   <p>Color:{color}</p>
   
   
    </div>
    //   <div>
       
    //   <Name name= {props.name}/>
    //   <img src={props.img} alt="" />
    //   <p>Color:{props.color}</p>
      
      
    //    </div>
  )
}

export default Cat
