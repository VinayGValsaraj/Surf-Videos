import React from 'react';

import styled from 'styled-components';
import SearchIcon from 'grommet/components/icons/base/Search';
import CloseIcon from 'grommet/components/icons/base/Close';
import { Anchor } from 'grommet'
import { Redirect } from 'react-router-dom'

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

const ResponsiveForm = styled.form`
  width: 100%;
  display: ${props => (props.toggle ? '' : 'none')};
	position: ${props => (props.toggle ? 'absolute' : '')};
	left: ${props => (props.toggle ? 0 : '')};
  padding-right: 2.5em;
`

const SearchIconWrapper = styled(Anchor)`
	z-index: 300;
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

  changeTerm = (e) => {
    this.setState({term: e.target.value})
  }

  submit = (e) => {
    this.setState({submitted: true})
  }

  toggleForm = () => {
    let toggle = !this.state.toggle
    this.setState({toggle: toggle})
    this.props.toggleSearch();
  }

  componentDidUpdate() {
    if (this.state.toggle) {
      this.searchInput.focus();
    }
  }

  render() {
    const { toggle, term } = this.state;

    return (
      <Container>
        <ResponsiveForm onSubmit={this.submit} toggle={toggle}>
          <InputBox innerRef={(input) => { this.searchInput = input; }}
          onChange={this.changeTerm} placeholder="Search"/>
        </ResponsiveForm>
        <SearchIconWrapper onClick={this.toggleForm} icon= {toggle ? <CloseIcon /> : <SearchIcon /> }
        />
        {
          this.state.submitted &&
          <Redirect
            to={{
              pathname: '/search/' + term,
              state: { term: term }
            }}
          />
        }
      </Container>
    );
  }
}


export default Search;
