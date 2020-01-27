import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { StateProvider, SET_ADDRESS } from '../State';

configure({ adapter: new Adapter() });

const initialState = { address: null };

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { address: action.address};
    default:
      return state
  }
}

const addressMock = {
  "cep": "02050-010",
  "logradouro": "Rua Miguel Mentem",
  "complemento": "",
  "bairro": "Vila Guilherme",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}

test('Integração', () => {
  const wrapper = shallow(
    <StateProvider initialState={initialState} reducer={reducer} />
  );
  const [address , dispatch] = wrapper.props('value').value
  expect(wrapper.props('value').value[0].address).toBe(null);
  dispatch({ type: SET_ADDRESS, address: addressMock });
  expect(wrapper.props('value').value[0].address).toEqual(addressMock)
});