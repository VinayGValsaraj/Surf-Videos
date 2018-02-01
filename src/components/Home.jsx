import React from 'react';

import ShowListing from './ShowListing';

class Home extends React.Component {
  render() {
    var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&maxResults=30&q=surf";
    return(<ShowListing url={url}/>);
  }
}

export default Home;
