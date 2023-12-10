import Card from "./components/card/Card";
import data from "./data"




function App() {
  console.log(data)
  return (
    <div>
       <h1>LANGUAGES</h1>
        <Card data={data}/>
        




    </div>
  );
}

export default App;
