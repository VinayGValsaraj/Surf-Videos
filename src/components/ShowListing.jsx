import React from 'react';

import Listing from './Listing';

class ShowListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: [],
      nextPageToken: "",
      url: props.url
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
        let newVids = this.state.vids.concat(json.items);
        this.setState({vids:newVids, nextPageToken: json.nextPageToken});
        console.log(this.state);
      });
  }

  getMoreVids = () => {
    var url = this.state.url;
    url += "&pageToken=";
    url += this.state.nextPageToken;

    this.getVids(url);
  }

  componentWillMount() {
    this.getVids(this.state.url);
  }

  render() {
    return(
      <Listing vids={this.state.vids} getMoreVids={this.getMoreVids}/>
    )
  }
}

export default ShowListing;
