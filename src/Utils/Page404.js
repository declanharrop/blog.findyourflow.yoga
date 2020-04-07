import React from 'react';
import styled from 'styled-components';

const Page404 = ({ location }) => (
  <Wrapper>
    <div>
      {location ? (
        <h2>
          No match found for <code>{location.pathname}</code>
        </h2>
      ) : (
        <h2>Nothing to see here... Click one of the links in the top right</h2>
      )}
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Image = styled.img`
  height: 30vh;
  margin: 0 0 10vh 0;
`;

export default Page404;
