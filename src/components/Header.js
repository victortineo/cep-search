import React from 'react';
import Search from './Search';
import styledComponentsCjs from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Consultar</Title>
      <Search />
    </HeaderContainer>
  )
};

const HeaderContainer = styledComponentsCjs.header`
  background-color: #eee;
  padding: 30px 20px;
`

const Title = styledComponentsCjs.h2`
  margin: 0 0 20px;
  font-size: 1.2em;
  color: #4a4a4a;
`

export default Header;