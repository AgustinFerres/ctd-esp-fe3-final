import { createContext, useEffect, useReducer } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios";


export const ContextGlobal = createContext();


const reducerFunction = (state, action) => {
  switch (action.type) {
    case "dark":
      return createTheme({
        ...state,
        palette: {
          mode: 'light',
          primary: {
            main: '#283593',
            light: '#283593'
          },
          secondary: {
            main: '#000'
          },
          background: {
            default: '#f3f3f3'
          },
          text: {
            primary: '#fff',
            secondary: '#000',
          }
        },
      })
    case "light":
      return createTheme({
        ...state,
        palette: {
          mode: 'dark',
          primary: {
            main: '#242424',
            light: '#373737'
          },
          secondary: {
            main: '#fff'
          },
          background: {
            default: '#000',
          },
          text: {
            primary: '#fff',
            secondary: '#fff',
          }
        },
      })
    case "data":
      return {
        ...state,
        data: action.payload
      }
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
        main: '#283593',
        light: '#283593'
      },
      secondary: {
        main: '#000'
      },
      background: {
        default: '#f3f3f3'
      },
      text: {
        primary: '#fff',
        secondary: '#000',
      }
    },
  })

  
  //SE TIENE QUE LLAMAR ASÍ
  const [state, dispatch] = useReducer(reducerFunction, initalState);
  
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(url).then(res => dispatch({type: 'data', payload: res.data})).catch(err => console.log(err))
  },[])

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