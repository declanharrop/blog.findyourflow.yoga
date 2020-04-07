import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
  text-align: left;
  padding: 60px 20px 10px 20px;
  h1 {
    font-size: 4rem;
    max-width: 1360px;
    margin: 0 auto;
    @media (max-width: 1000px) {
      font-size: 3.2rem;
    }
  }
`;

const Nav = () => (
  <Wrapper>
    <Link to="/" title="Home">
      <h1>Find Your Flow - Blog</h1>
    </Link>
  </Wrapper>
);

export default Nav;
