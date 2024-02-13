import {Link} from "react-router-dom"

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
    <div className="d-flex flex-column">

    <Link to ="/instructor/1"> Intructor-1</Link>
    <Link to ="2"> Intructor-2</Link>
    <Link to ="3"> Intructor-3</Link>


    </div>


    </div>
  );
};

export default Instructors;
