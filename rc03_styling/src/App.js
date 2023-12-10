import Card from "./components/card/Card";
import data from "./data"




function App() {
  console.log(data)
  return (
    <div>
       <h1>IT og informasjonssystemer Bachelor ved UIA</h1>

        
        {/* <Card data={data}/> */}

        {/* iteraston (3) */}

        {data.map( ({ id,language, img, btnName})  => (

          <Card 
          key={id}
          lang={language} 
          img={img}  
          btn={btnName} 
          />
          ))}

        




    </div>
  );
}

export default App;
