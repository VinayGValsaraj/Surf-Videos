import React from 'react';

import { Title } from 'grommet';

import styled from 'styled-components';
import Search from './Search.jsx';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 1.5em 5em;

  border: 1px lightgrey;
  border-style: none none solid;
`

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchToggle: false
    };
  }

  toggleSearch() {
    let searchToggle = !this.state.searchToggle
    this.setState({searchToggle: searchToggle})
  }

  render() {
    const { searchToggle } = this.state
    return (
      <Container>
        <Title style = {searchToggle ? {visibility: "hidden"} : {}}>
          Surf Videos
        </Title>
        <Search toggleSearch={this.toggleSearch} />
      </Container>
    )
  }
}

export default NavBar;
