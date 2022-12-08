import { createContext, useReducer } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


export const ContextGlobal = createContext();


const reducerFunction = (state, { mode }) => {
  switch (mode) {
    case "dark":
      return createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#1565c0',
            light: '#1565c9'
          },
          text: {
            primary: '#fff',
            secondary: '#000',
          }
        },
      })
    case "light":
      return createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#242424',
            light: '#404040'
          },
          background: {
            default: '#343434',
          },
          text: {
            primary: '#fff',
            secondary: '#fff',
          }
        },
      })
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const initalState = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1565c0',
        light: '#1565c9'
      },
      text: {
        primary: '#fff',
        secondary: '#000',
      }
    },
  })
  //SE TIENE QUE LLAMAR ASÍ
  const [state, dispatch] = useReducer(reducerFunction, initalState);

  const app = {
    state, dispatch
  }

  return (
    <ContextGlobal.Provider value={app}>
      <ThemeProvider theme={state}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ContextGlobal.Provider>
  );
};

export default ContextProvider