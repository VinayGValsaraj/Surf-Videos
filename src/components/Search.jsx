import React from 'react';

import styled from 'styled-components';
import SearchIcon from 'grommet/components/icons/base/Search';
import CloseIcon from 'grommet/components/icons/base/Close';

import { Anchor } from 'grommet'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const InputBox = styled.input`
  width: 100%;
  border: none !important;
  padding: 1em 5em !important;
  font-size: 1.25em !important;
`

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      submitted: false,
      toggle: false
    };
  }

  toggleForm() {
    let toggle = !this.state.toggle
    this.setState({toggle: toggle})
    this.props.toggleSearch();
  }

  render() {
    const { toggle, term } = this.state;

    return (
      <Container>
        <InputBox placeholder="Search"/>
        <Anchor onClick={this.toggleClick} icon= {toggle ? <CloseIcon /> : <SearchIcon /> }
        />
      </Container>
    );
  }
}


export default Search;
