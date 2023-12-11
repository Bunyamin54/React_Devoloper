// import "./Buton.css"
import ButonStyle from "./Buton.module.css"

const buton = ({btn}) => {
  return (
    // <div className="btn-title"> 
    <div className={ButonStyle.btn-title}> 
     {/* <button className="btn-white"> {btn} </button> */}
     <button className={["btn-white"]}> {btn} </button>

    </div>
 
  )
}

export default buton
