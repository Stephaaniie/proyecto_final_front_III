/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  useMemo,
  useState,
  useEffect,
  createContext,
} from "react";

import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from "../../theme/createTheme";

export const initialState = []

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error));
  }, []);
  const handleSwitchChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};
  const dataMemo = useMemo(() => data, [data]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ContextGlobal.Provider value={{ dataMemo, handleSwitchChange, theme }}>
        {children}
      </ContextGlobal.Provider>
    </ThemeProvider>
  );
};