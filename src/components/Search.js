import React, { useState } from 'react';
import Styled from 'styled-components'
import InputMask from 'react-input-mask';
import { text, btn, white } from '../consts/colors';
import { getCep } from '../utils/api';
import { useStateValue, SET_ADDRESS, SET_LOADING, SET_LOCATION } from '../State';
import getLocation from '../utils/mapGeocode'; 

const setAddress = (address, dispatch) =>
  dispatch({ type: SET_ADDRESS, address });

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useStateValue()[1]; 

  const onSubmit = async e => {
    e.preventDefault();
    dispatch({ type: SET_LOADING });
    try {
      const address = await getCep(searchValue);
      const addressString = `${address.logradouro} - ${address.bairro}, ${address.localidade} - ${address.uf}`;
      getLocation(addressString,
        (value) => dispatch({ type: SET_LOCATION, value })
      );
      return setAddress(address, dispatch);
    } catch {
      setAddress({ invalid: true }, dispatch);
    };
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>CEP</Title>
      <SearchInput placeholder='Digite apenas números'
        value={searchValue} onChange={(e) => setSearchValue(e.target.value)} mask="99999-999"
      />
      <Button>Buscar</Button>
    </Form>
  );
};

const Form = Styled.form`
  display: flex;
  position: relative;  
`;

const Title = Styled.h3`
  color: ${text};
  margin: 0;
  font-weight: normal;
  margin-right: 15px;
`;

const SearchInput = Styled(InputMask)`
  color: ${text};
  height: 25px;
  margin: 0 6px;
  padding: 0 5px;
`;

const Button = Styled.button`
  color: ${white};
  background: ${btn};
  border: none;
  border-radius: 5px;
  padding: 5px 12px;
`;

export default Search;