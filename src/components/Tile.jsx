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

  @media all and (max-width: 1280px) {
    width: 20%;
  }
  @media all and (max-width: 1024px) {
    width: 25%;
  }
  @media all and (max-width: 768px) {
    width: 33.33%;
  }
  @media all and (max-width: 480px) {
    width: 50%;
  }
`

const TextBox = styled.div`
  max-width: unset;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
`

const TileTitle = styled.div`
  font-weight: 1000;
`

const Channel = styled.div`
  font-weight: 500;
`

const Description = styled.div`
  @media all and (max-width: 670px) {
    display: none;
  }
`

function Tile(props) {
  return (
    <Link to={buildVideoURL(props.video.id.videoId)}>
      <ResponsiveTile>
        <img src={props.video.snippet.thumbnails.high.url}/>
        <TextBox>
          <TileTitle>{props.video.snippet.title}</TileTitle>
          <Channel>{props.video.snippet.channelTitle}</Channel>
          <Description>{props.video.snippet.description}</Description>
        </TextBox>
      </ResponsiveTile>
    </Link>
  )
}

export default Tile;
