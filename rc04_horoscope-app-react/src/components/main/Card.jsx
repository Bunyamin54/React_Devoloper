const Card = (props) => {

    console.log("ne geliyor" , props)

    return (
        <div className="cards">

     <h1>title</h1>
        <div className="date">
         <h2>date</h2>

        </div>

        <img src="" alt="" />
        <div className="card-over">
            <p>description</p>
        </div>
        </div>
    )
}

export default Card