import React from 'react';
import { useStateValue, SET_ADDRESS } from '../State';
import AddressMap from './Map';
import styledComponentsCjs from 'styled-components';

const Container = () => {
  const [{ address, isLoading }, dispatch] = useStateValue();

  const closeMap = () => dispatch({type: SET_ADDRESS, address: null})

  if (isLoading) return <p>Carregando</p>;
  if (!address) return false;
  if (address.invalid) return <p>Digite um CEP válido</p>;
  if (address.erro) return <p>Nenhum resultado</p>;

  return (
    <DivContainer>
      <CloseButton onClick={closeMap}>Fechar</CloseButton>
      <Title>{address.logradouro}</Title>
      <Text>{address.bairro}</Text>
      <Text>{address.localidade} - {address.uf}</Text>
      <Text>{address.cep}</Text>
      <MapContainer>
        <AddressMap />
      </MapContainer>
    </DivContainer>
  )
};

const CloseButton = styledComponentsCjs.button`
  background: none;
  background-image: url(close.png);
  height: 20px;
  width: 20px;
  background-size: cover;
  font-size: 0;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
  outline: none;
  cursor: pointer;
`

const DivContainer = styledComponentsCjs.div`
  padding: 20px;
  border: 2px solid #eee;
  margin-top: 5px;
  position: relative;
`

const Text = styledComponentsCjs.p`
  font-size: .8em;
  margin: 2px 0;
`

const Title = styledComponentsCjs.h3`
  margin: 0 0 5px;
  font-weight: 600;
  font-size: 1.2em;
`

const MapContainer = styledComponentsCjs.div`
  margin-top: 15px;
`;

export default Container;