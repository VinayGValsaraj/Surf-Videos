import React from 'react';

import ShowListing from './ShowListing.jsx';

class SearchResults extends React.Component {
  render() {
    var searchQuery = this.props.match.params.query.replace(/ /g, '+');
    var searchURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&maxResults=30&q=surf";
    searchURL += "+" + searchQuery;
    return(
      <ShowListing url={searchURL}/>
    );
  }
}

export default SearchResults;
