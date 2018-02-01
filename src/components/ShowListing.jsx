import React from 'react';

import Listing from './Listing';

class ShowListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: []
    };
  }

  getVids = (url) => {
    fetch(url, {
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

  componentWillMount() {
    this.getVids(this.props.url);
  }

  render() {
    return(
      <Listing vids={this.state.vids}/>
    )
  }
}

export default ShowListing;
