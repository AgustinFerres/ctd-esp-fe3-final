import { createContext, useReducer } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);


const reducerFunction = (state, { mode }) => {
  switch (mode) {
    case "dark":
      return createTheme({
        palette: {
          mode: 'light',
        },
      })
    case "light":
      return createTheme({
        palette: {
          mode: 'dark',
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