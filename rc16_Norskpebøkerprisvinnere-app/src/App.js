import AppRouter from './router/AppRouter';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './styles/theme';
import {GlobalStyles} from './styles/GlobalStyles';
import {useThemeContext} from "./context/ThemeContext"
function App () {
  const {myTheme} = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;
  return (
    <div className="App">

      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <AppRouter />

      </ThemeProvider>

    </div>
  );
}

export default App;
