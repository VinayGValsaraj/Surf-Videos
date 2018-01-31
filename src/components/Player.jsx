import React from 'react';
import YouTube from 'react-youtube';

import styled from 'styled-components';

const PlayerBox = styled.div`
  text-align: center;
  margin-top: 2em;
`

const StyledYouTube = styled(YouTube)`
  max-width: 100%;
`

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
    <PlayerBox>
      <StyledYouTube
        videoId={props.match.params.id}
        opts={opts}
      />
    </PlayerBox>
  );
}


export default Player;
