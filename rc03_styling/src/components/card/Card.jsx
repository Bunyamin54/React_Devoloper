
import Buton from "../buton/Buton";
// import "./Card.css";
import CardStyle from "./Card.module.css"

const Card = ({ fagbøker, btn, img }) => {


  return (
    <div>
      <h1 className={CardStyle["img-title"]}>{fagbøker}</h1>
      <img className={CardStyle["images"]} src={img}  alt="img"/>
      <Buton btn={btn}  />
    </div>
  );
};

export default Card;
