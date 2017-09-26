import React, { Component } from 'react';
// const Component = React.Component;
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const API_KEY = 'AblBuO4z90ILlqsGS8QmO2im2kfLOf1N';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      giphyId: 'xT9IgDEI1iZyb2wqo8'
    };
  }

  searchGifs = (term) => {
    giphy(API_KEY).search(term, (err, response) => {
      if (response && response.data && response.data.length > 0) {
        this.setState({
          gifs: response.data.slice(0, 10).map(gif => ({ giphyId: gif.id }))
        });
      }
    });
  }

  handleClick = (id) => {
    this.setState({
      giphyId: id
    });
  }

  render() {
    return (
      <div>
        <div className="main-scene">
          <SearchBar handleChange={this.searchGifs} />
          <div className="main-frame">
            <Gif giphyId={this.state.giphyId} />
          </div>
        </div>
        <div className="list-container">
          <GifList gifs={this.state.gifs} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
