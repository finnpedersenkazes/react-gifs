import React from 'react';
import Gif from './gif'

const GifList = ({ gifs, handleClick }) => {
  const renderList = () => {
    return gifs.map((gif) => {
      return <Gif giphyId={gif.giphyId} handleClick={handleClick} />
    })
  }

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  )
}

export default GifList;
