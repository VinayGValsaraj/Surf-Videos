import React from 'react';

import styled from 'styled-components';
import Tile from './Tile.jsx';

const Grid = styled.div`
  padding: 2em 5em;
`

class Listing extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.props.getMoreVids();
    }
  }

  render() {
    return (
      <Grid>
        {this.props.vids.map(item =>
        <Tile video={item}/>)}
      </Grid>
    )
  }
}

export default Listing;
