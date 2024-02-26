import AppRouter from './router/AppRouter';
import {ThemeProvider} from "styled-components"
function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <AppRouter/>

      </ThemeProvider>
   
    </div>
  );
}

export default App;
