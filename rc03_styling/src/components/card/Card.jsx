import Buton from "../buton/Buton"


import "./Card.css"

const Card = ({lang, btn, img}) => {
  return (
    <div>
  <h1>{lang}</h1>
  <img src={img} alt="image" />
  <h2>{btn}</h2>
  <Buton/>
    </div>
  )
}

export default Card
