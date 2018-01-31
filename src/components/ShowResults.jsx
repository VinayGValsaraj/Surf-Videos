import React from 'react';

import Listing from './Listing.jsx';

class ShowResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: []
    };
  }

  componentWillMount() {
    var searchQuery = this.props.match.params.query.replace(/ /g, '+');
    var searchURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&maxResults=30&q=surf";
    searchURL += "+" + searchQuery;
    fetch(searchURL, {
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
    return(<Listing vids={this.state.vids}/>);
  }
}

export default ShowResults;
