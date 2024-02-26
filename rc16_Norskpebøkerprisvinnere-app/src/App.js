import AppRouter from './router/AppRouter';
import {ThemeProvider, useTheme} from 'styled-components';
import {lightTheme, darkTheme} from './styles/theme';
import {GlobalStyles} from './styles/GlobalStyles';
function App () {
  const {myTheme} = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme
  return (
    <div className="App">

      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <AppRouter />

      </ThemeProvider>

    </div>
  );
}

export default App;
