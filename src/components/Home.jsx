import React from 'react';

import Listing from './Listing';

class Home extends React.Component {
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
    return(<Listing vids={this.state.vids}/>);
  }
}

export default Home;
