import AppRouter from './router/AppRouter';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './styles/theme';
import {GlobalStyles} from './styles/GlobalStyles';
import {useThemeContext} from "./context/ThemeContext"
import AuthContextProvider from './context/AuthContext';
function App () {
  const {myTheme} = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;
  return (
    <div className="App">

      <ThemeProvider theme={themes}>
        <GlobalStyles />
       
       <AuthContextProvider>
       <AppRouter />

       </AuthContextProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
