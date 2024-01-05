import {data} from "../../helpers/data"

const Main = () => {

 console.log(data)
    return (
    <div className="card-container">
  {data.map(() => (<p>card container</p> 
))}
    </div>

    )
}

export default Main;