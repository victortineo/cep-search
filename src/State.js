import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

export const SET_LOADING = 'SET_LOADING';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_LOCATION = 'SET_LOCATION';