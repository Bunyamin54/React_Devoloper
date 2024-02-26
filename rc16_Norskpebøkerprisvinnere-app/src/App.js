import AppRouter from './router/AppRouter';
import {ThemeProvider} from "styled-components"
import { lightTheme } from './styles/theme';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {lightTheme}>
      <AppRouter/>

      </ThemeProvider>
   
    </div>
  );
}

export default App;
