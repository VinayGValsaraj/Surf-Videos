import React from 'react';
import { Paragraph } from 'grommet';
import styled from 'styled-components';

const ResponsiveTile = styled.div`
  display: inline-block;
  width: 16.6%;
  vertical-align: top;
  padding: 0.5em;
`

function Tile(props) {
  return (
    <ResponsiveTile>
      <img src={props.video.snippet.thumbnails.high.url}/>
      <div>{props.video.snippet.title}</div>
      <div>{props.video.snippet.channelTitle}</div>
      <div>{props.video.snippet.description}</div>
    </ResponsiveTile>
  )
}

export default Tile;
