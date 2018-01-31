import React from 'react';

import { Title } from 'grommet';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 1.5em 5em;

  border: 1px lightgrey;
  border-style: none none solid;
`

class NavBar extends React.Component {
  render() {
    return (
      <Container>
        <Title>
          Surf Videos
        </Title>
      </Container>
    )
  }
}

export default NavBar;
