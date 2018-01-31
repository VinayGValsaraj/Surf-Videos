import React from 'react';
import YouTube from 'react-youtube';


function Player(props) {
  const opts = {
    height: '720',
    width: '1280',
    playerVars: {
      autoplay: 1
    }
  };
  console.log(props);
  return(
    <YouTube
      videoId={props.match.params.id}
      opts={opts}
    />
  );
}


export default Player;
