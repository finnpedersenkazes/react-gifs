import React from 'react';

const Gif = ({ giphyId, handleClick }) => {
  const url = `https://media.giphy.com/media/${giphyId}/giphy.gif`;
  return (
    <img
      src={url}
      alt=""
      className="gif"
      onClick={() => handleClick(giphyId)} />
  );
}

export default Gif;
