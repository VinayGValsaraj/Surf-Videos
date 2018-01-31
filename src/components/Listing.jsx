import React from 'react';

import styled from 'styled-components';
import Tile from './Tile.jsx';

const Grid = styled.div`
  padding: 0 5em;
`

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: []
    };
  }

  componentWillMount() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&maxResults=30&q=surf', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }).then((response) => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then((json) => {
        this.setState({vids:json.items});
        console.log(this.state);
      });
  }

  render() {
    return (
      <Grid>
        {this.state.vids.map(item =>
        <Tile video={item}/>)}
      </Grid>
    )
  }
}

export default Listing;
