
 import mandalina from  "./img/mandalina.webp"



const Content = () => {

     const parStyle = {
      fontFamily: "tahoma",
      fontSize:"1.5rem",
      textAlign:"justify",
      color:"blue",

     }


       const imgStyle = {

        borderRadius:"20px",
        width:"400px",
        cursor:"pointer",
        display: "block",
        margin: "auto",
        padding:"20px"
       }
  return (
    <main>
      
  <h2 style={{color: "white", backgroundColor: "red"}}>React JS</h2>
  <img style={imgStyle} src="https://cdn.pixabay.com/photo/2023/11/30/07/51/bridge-8420945_1280.jpg" alt="" />
  <img style={imgStyle} src="https://cdn.pixabay.com/photo/2023/11/26/14/43/girl-8413748_640.png" alt="" />
  <img style={imgStyle} src="https://cdn.pixabay.com/photo/2023/12/04/18/09/icebergs-8430043_640.jpg" alt="" />
  <img src="./assets/island-bird.webp" alt="" />
   <img src={mandalina} alt="Mandalina" />
  <p style={parStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur, ad numquam porro ratione adipisci assumenda, voluptas dicta ipsa quod nemo soluta similique tempore incidunt magnam rerum non ex accusamus.</p>
  
  <br />

  <h3>Bu bir h3 elementdir.</h3>
    </main>
  )
}

export default Content
