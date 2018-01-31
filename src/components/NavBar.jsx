import React from 'react';

import { Title, Box } from 'grommet';

import styled from 'styled-components';
import Search from './Search.jsx';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 1em 5em;

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

  toggleSearch = () => {
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
        <Box flex={true}
          justify='end'
          direction='row'
          align='center'>
          <Search toggleSearch={this.toggleSearch} />
        </Box>
      </Container>
    )
  }
}

export default NavBar;
