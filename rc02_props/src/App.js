
import Cat from "./components/Cat";



function App() {
  return (
    <div>
   <Cat 
   name = "Nicky" 
   img= "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_640.jpg"
   color="krem" 
   />

<Cat 
   name = "Garfyld" 
   img= "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg"
   color="Gray" 
   />

<Cat 
   name = "Minnos" 
   img= "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg"
   color="'Orange" 
   />

<Cat 
   name = "Minnos" 
   img= "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg"
  //  color="'Orange" 

  //!  color vermedigmiz halde default olarak propsda belirttigimiz icin grey olarak gelir
   />
</div>
  );
}

export default App;
