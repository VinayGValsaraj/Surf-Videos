import React from 'react';
import { Paragraph } from 'grommet';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { buildVideoURL } from '../lib/TextUtils.js'

const ResponsiveTile = styled.div`
  display: inline-block;
  width: 16.6%;
  vertical-align: top;
  padding: 0.5em;
`

const TextBox = styled(Paragraph)`
  max-width: unset;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TileTitle = styled.div`
  font-weight: 1000;
`

const Channel = styled.div`
  font-weight: 500;
`

function Tile(props) {
  return (
    <Link to={buildVideoURL(props.video.id.videoId)}>
      <ResponsiveTile>
        <img src={props.video.snippet.thumbnails.high.url}/>
        <TextBox>
          <TileTitle>{props.video.snippet.title}</TileTitle>
          <Channel>{props.video.snippet.channelTitle}</Channel>
          <div>{props.video.snippet.description}</div>
        </TextBox>
      </ResponsiveTile>
    </Link>
  )
}

export default Tile;
