import React from 'react';
import { Paragraph } from 'grommet';
import styled from 'styled-components';

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
    <ResponsiveTile>
      <img src={props.video.snippet.thumbnails.high.url}/>
      <TextBox>
        <TileTitle>{props.video.snippet.title}</TileTitle>
        <Channel>{props.video.snippet.channelTitle}</Channel>
        <div>{props.video.snippet.description}</div>
      </TextBox>
    </ResponsiveTile>
  )
}

export default Tile;
