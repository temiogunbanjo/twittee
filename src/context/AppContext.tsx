import React, { createContext, useReducer, useEffect } from 'react';
import { initialAppState, IAppState } from '../interfaces/AppInterface';
import appReducer from './AppReducer';
import setAuthToken from '../utils/setAuthToken';

export const AppContext = createContext<IAppState | any>(initialAppState);

// function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    const token = parsedState.token as string;
    setAuthToken(token);
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// load state from local storage
const storedState = loadState();

// provider function
export const AppProvider = (props: any): JSX.Element => {
  const [appState, dispatch] = useReducer(appReducer, storedState || initialAppState);
  const { children } = props;

  // save state to local storage when state changes
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(appState));
  }, [appState]);

  return <AppContext.Provider value={{ appState, dispatch }}>{children}</AppContext.Provider>;
};
