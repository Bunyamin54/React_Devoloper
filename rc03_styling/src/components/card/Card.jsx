
import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({ fagbøker, btn, img }) => {


  return (
    <div>
      <h1 className="img-title">{fagbøker}</h1>
      <img className="images" src={img}  alt="img"/>
      <Buton btn={btn}  />
    </div>
  );
};

export default Card;
