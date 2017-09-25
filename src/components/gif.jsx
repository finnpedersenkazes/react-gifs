import React from 'react';


const Gif = (props) => {
  const url = `https://media.giphy.com/media/${props.giphyId}/giphy.gif`;
  return <img src={url} alt="" className="gif" />
}

export default Gif;