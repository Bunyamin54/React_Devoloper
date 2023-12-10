import Card from "./components/card/Card";
import data from "./data"




function App() {
  console.log(data)
  return (
    <div>
       <h1>IT og informasjonssystemer Bachelor ved UIA</h1>

        
        {/* <Card data={data}/> */}

        {/* iteraston (3) */}

        {data.map( ({ id,fagbøker, img, btnName})  => (

          <Card 
          key={id}
          fagbøker={fagbøker} 
          img={img}  
          btn={btnName} 
          />
          ))}

        




    </div>
  );
}

export default App;
