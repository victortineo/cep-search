import React from 'react';
import Header from './Header';
import Container from './SearchContainer';
import { StateProvider, SET_ADDRESS, SET_LOADING, SET_LOCATION } from '../State';
import styledComponentsCjs from 'styled-components';

const initialState = {address: null, isLoading: false, location: null};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.address, isLoading: false};
    case SET_LOADING:
      return {...state, isLoading: true};
    case SET_LOCATION:
      return { ...state, location: action.value };
    default:
      return state
  }
}

function App(props) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AppBody className="App">
        <Header />
        <Container />
      </AppBody>
    </StateProvider>
  );
}

const AppBody = styledComponentsCjs.div`
  max-width: 700px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

export default App;
