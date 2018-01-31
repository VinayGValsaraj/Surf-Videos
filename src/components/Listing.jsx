import React from 'react';

import styled from 'styled-components';
import Tile from './Tile.jsx';

const Grid = styled.div`
  padding: 0 5em;
`

class Listing extends React.Component {
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
